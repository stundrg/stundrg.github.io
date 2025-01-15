# team blog@sunsin.shop
- Our team's technology blog inherits the spirit of Admiral Yi Sun-sin of Joseon
  
<img src="http://oss.cashmallow.com/images/tiger-cute.svg" alt="tiger cute" style="width:200px;"/>

### Connecting
- PRD - https://team-calcalhan.store
- STG - -https://team-sunsin.web.app-

### Contribute guide
- Anyone can do it's possible. Let's send the PR first and make it a better team by joining.

0. created based on [vuepress](https://v2.vuepress.vuejs.org/)
1. git clone https://github.com/oss-cashmallow/oss-cashmallow.github.io.git
2. edit with [vscode](https://code.visualstudio.com/) OR VIM
3. install
``` bash
https://github.com/nvm-sh/nvm
https://pnpm.io/ko/
```
4. run - development environment [install pnpm](https://pnpm.io/installation)
- connecting to localhost 8080
- node.js install if you have get error 'ELIFECYCLE Command failed'
```
$ nvm install --lts
$ nvm use
$ node -v
v22.13.0

$ pnpm install
pnpm install
pnpm docs:dev
-   Local: http://localhost:8080/
```

### build & deploy
1. STG
- [x] 배포전 작업 파일은 모두 커밋!
- [install firebase](https://v2.vuepress.vuejs.org/guide/deployment.html#google-firebase)

``` bash
$ git add .
$ pnpm docs:build
$ firebase login
$ firebase deploy

git checkout HEAD -- docs/
$ sh deploy-stg.sh

docs/team/how2pr/ 제거
╞╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╡╞╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╡
STG DEPLOY OK!
https://oss-cashmallow.web.app
```

2. PRD
- github pages -> docs
- sh prd-build.sh -> push -> pr merge -> deploy - end
- https://oss.cashmallow.com

<img src="https://user-images.githubusercontent.com/120996497/212484360-1b212db0-5a5c-449f-8cc2-35de2126bd66.png" alt="cashmallow" style="width:600px;"/>
<img src="https://oss-cashmallow.github.io/images/hero.png" alt="cashmallow" style="width:200px;"/>
