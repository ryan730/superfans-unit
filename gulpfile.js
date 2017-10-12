/**
 * Created by ryan on 2017/9/26.
 */
console.log('[============超粉单元测试启动============]');
const env=process.env;
const argv = require('minimist')(process.argv.slice(2));
const gulp = require('gulp');
const KarmaServer = require('karma').Server;
const replace = require('gulp-replace');
//const child_process = require('child_process');
const spawn = require('child_process').spawn;
const debug = false;


const postprocessLCOV = ()=>{
  // /Users/ryan/company_work/weibo/git/superfans-17-9-master/test/units/coverage/lcov.info
  console.log('[============提供coverage给sonar============]');
  return gulp.src(__dirname + '/coverage/lcov.info')
    .pipe(replace(/(?=SF:).*?(?=src)/g, 'SF:'))
    .pipe(gulp.dest(__dirname + '/coverage'))
    .on('end', function () {
      console.log('[============开始上传到sonar============]');
      (argv.env&&argv.env==='besonar')&&sendSonarServer();
    });
};

function sendSonarServer () {
  const sonarProcess = spawn('bash', ['runSonar.sh']);

  sonarProcess.stdout.on('data', (data) =>{
    if(debug){
      console.log('\n' + data);
    }else {
        console.log('[============正在上传到sonar...============]');
    }
  });

  sonarProcess.stderr.on('data', (data) =>{
    if(debug){
        console.warn('\n' + data);
    }else {
        //console.log('[============正在上传到sonar中============]');
    }
  });

  sonarProcess.on('close', (code, signal) =>{
    console.log('\n' + code);
    console.log('[============上传到sonar成功============]');
  });

  sonarProcess.on('exit', (code, signal) =>{
    console.log('\n' + code);
  });
}


gulp.task('test', function () {
  new KarmaServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, postprocessLCOV).start();
});
