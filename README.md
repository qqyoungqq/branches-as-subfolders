# Master README file

## Overview 
Setup Github "master" branch, "gh-pages" branch and "develop" branch as subfolders of a parent project folder ("branches-as-subfolders"). "develop" branch keeps source and build code which is generated using GULP. "master" and "gh-pages" branches only keep the build code. This system allows you to do most of the work on the developement branch and merge completed changes to the master and source branches.  

## The Result
The final folder structure on my local system is:  
```
/branches-as-subfolders
/branches-as-subfolders/develop
/branches-as-subfolders/develop/.git # checkout of "develop" branch
/branches-as-subfolders/develop/README.textfile
/branches-as-subfolders/develop/src/
/branches-as-subfolders/develop/build/
/branches-as-subfolders/develop/node_modulies/
/branches-as-subfolders/develop/gulpfile.js

/branches-as-subfolders/master
/branches-as-subfolders/master/.git # checkout of "master" branch
/branches-as-subfolders/master/README.md 
/branches-as-subfolders/master/index.html

/branches-as-subfolders/gh-pages
/branches-as-subfolders/gh-pages/.git # checkout of "gh-pages" branch
/branches-as-subfolders/gh-pages/README.textfile 
/branches-as-subfolders/gh-pages/index.html
```

## Process
Create a new repository with the project name "branches-as-subfolders" in GitHub.
(https://github.com/repositories/new)

Open Terminal.app, create project parent folder "branches-as-subfolders", and a subfolder for the "master" branch.  Initialise a new git repository for the project and push the "master" branch to GitHub

```
mkdir branches-as-subfolders
cd braches-as-subfolders
mkdir master
cd master
git init
echo "# Master README file" > README.md
git add .
git commit -m "Add Master README.md"
git remote add origin https://github.com/qqyoungqq/branches-as-subfolders.git
git push origin master
```  

Go back to GitHub and generate a branch "gh-pages" 

Go back to Terminal.app, change directory to the parent folder, create a "gh-pages" subfolder for your "gh-pages" branch and change directory into it.  Clone the "branches-as-subfolders" repository into the "gh-pages" folder, checkout the "gh-pages" branch, and then remove the "master" branch. Make sure that "master" branch was removed and only "gh-pages" branch is listed. 

``` 
cd ../
mkdir gh-pages
cd gh-pages
git clone https://github.com/qqyoungqq/branches-as-subfolders.git .
git checkout origin/gh-pages -b gh-pages
git branch -d master
git branch
```

Remove the "REAME.md" file in the "gh-pages" branch and add a "README.textile" file to the "gh-pages" branch  

```
echo "h1. gh-pages README file" > README.textile
rm README.md
git add .
git commit -m "Add gh-pages README file"
```


Push to the "gh-pages" branch  

```
git push origin gh-pages
```

Go back to GitHub and generate a branch "develop" 

Go back to Terminal.app, change directory to the parent folder, create a "develop" subfolder for your "develop" branch and change directory into it.  Clone the "branches-as-subfolders" repository into the "develop" folder, checkout the "develop" branch, and then remove the "master" branch and "gh-pages" branch. Make sure that "master" branch and "gh-master" were removed and only "develop" branch is listed.  

``` 
cd ../
mkdir develop
cd develop
git clone https://github.com/qqyoungqq/branches-as-subfolders.git .
git checkout origin/develop -b develop
git branch -d master
git branch -d gh-pages
git branch
```

Then do your work on the developement branch. For example, create a "src" subfolder and create "index.html" in "src" subfolder.    

```
mkdir src
``` 

Now let's create index.html. And this code inside:  

```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Intro Project</title>
	</head>
	<body>
		<p>Hello World!</p>
	</body>
</html>
```

Then we can install gulp package to automatically generate build code from src code. Go back to folder "develop".   

```
npm install -g gulp
npm install gulp --save-dev
npm install gulp-minify-html --save-dev
```

Now let's add some code to our gulpfile.js file. Add this code inside:  

```
var gulp = require('gulp'),
	minifyhtml = require('gulp-minify-html');

gulp.task('default',function(){
	gulp.src('src/index.html')
					.pipe(minifyhtml())
					.pipe(gulp.dest('build/'));
});
```

Running gulp in folder "develop" to minify src/index.html and move the minified index.html to "build/".  

```
gulp 
```

Add and commit those changes in "develop" branch.  

```
git add .
git commit -m "Create src and build code using gulp"
```

Push to the "develop" branch. 

```
git push origin develop
```

Finally, lets copy the files in branches-as-subfolders/develop/build to branches-as-subfolders/master and to branches-as-subfolders/gh-pages.  Add and commit those changes in "master" branch and "gh-pages" branch respectively.  Then push to the "master" branch and "gh-pages" branch.  

## Reference 
https://gist.github.com/chrisjacob/833223 by Chris Jacob 
