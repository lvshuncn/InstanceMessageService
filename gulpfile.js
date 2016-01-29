/**
 * Created by lvshun on 16/1/18.
 */

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require("gulp-concat");
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');

gulp.task('default', function () {
  gulp.run('lib',"im","css");
});

gulp.task('lib', function () {
  gulp.src([
    "web/bower_components/angular/angular.min.js",
    "web/bower_components/angular-resource/angular-resource.min.js",
    "web/bower_components/angular-route/angular-route.min.js",
    "web/bower_components/angular-animate/angular-animate.min.js",
    "web/bower_components/angular-aria/angular-aria.min.js",
    "web/bower_components/angular-messages/angular-messages.min.js",
    "web/bower_components/angular-material/angular-material.min.js",
    "web/bower_components/angular-strap/dist/angular-strap.min.js",
    "web/bower_components/angular-strap/dist/angular-strap.tpl.min.js",
    "web/bower_components/angular-scroll-glue/src/scrollglue.js"
    ]
  )
    .pipe(concat('lib.js'))
    .pipe(gulp.dest('web/dist'))
    .pipe(rename('lib.min.js'))
    //.pipe(uglify())
    .pipe(gulp.dest('web/dist'));
});

gulp.task('im', function () {
  gulp.src([
    "web/util/util.js",
    "web/util/filter/time.format.filter.js",
    "web/util/service/http.service.js",
    "web/util/service/tool.service.js",
    "web/util/service/socket.service.js",
    "web/util/service/local.storage.service.js",
    "web/util/service/event.code.service.js",
    "web/util/directive/talk/talk.directive.js",
    "web/user/user.js",
    "web/user/service/user.service.js",
    "web/user/controller/login.user.controller.js",
    "web/user/controller/info.user.controller.js",
    "web/user/controller/list.user.controller.js",
    "web/friend/friend.js",
    "web/friend/service/friend.service.js",
    "web/friend/controller/list.friend.controller.js",
    "web/chat/chat.js",
    "web/chat/service/chat.service.js",
    "web/chat/controller/main.chat.controller.js",
    "web/im.js",
    "web/controller/base.controller.js"
    ]
  )
    .pipe(concat('im.js'))
    .pipe(gulp.dest('web/dist'))
    .pipe(rename('im.min.js'))
    //.pipe(uglify())
    .pipe(gulp.dest('web/dist'));
});


gulp.task('css', function() {
  return gulp.src([
    "web/bower_components/bootstrap/dist/css/bootstrap.min.css",
    "web/bower_components/angular-material/angular-material.min.css",
    "web/css/main.css"
  ])
    .pipe(concat('im.css'))
    .pipe(gulp.dest('web/dist/css'))
    .pipe(rename('im.min.css'))
    //.pipe(minifycss())
    .pipe(gulp.dest('web/dist/css'));
});