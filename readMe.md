###基本安装

    npm i superfans-unit


###指标

- 行覆盖率（line coverage）：是否每一行都执行了？
- 函数覆盖率（function coverage）：是否每个函数都调用了？
- 分支覆盖率（branch coverage）：是否每个if代码块都执行了？
- 语句覆盖率（statement coverage）：是否每个语句都执行了？

###report 怎么看

- Pink: statements not covered.

- Orange: functions not covered.

- Yellow: branches not covered.

- [I] and [E] in front of if-else statements: if or else not covered respectively

Branch coverage display only kicks in if one or more but not all branches have been taken
(if none of the branches were taken the statement coverage will show you that unambiguously)

https://en.wikipedia.org/wiki/Code_coverage

https://gotwarlost.github.io/istanbul/public/apidocs/index.html



###发布
- npm login --registry http://registry.npmjs.org
- npm publish --registry http://registry.npmjs.org


#Jasmine中文指南

https://yq.aliyun.com/articles/53426
http://blog.csdn.net/GuoJiangweigege/article/details/52130823


http://frontenddev.org/article/webstorm-primer-4-karma-jasmine-coverage-coveralls-phantomjs-travis-ci-unit-tests.html