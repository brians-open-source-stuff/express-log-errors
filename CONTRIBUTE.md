# How to contribute
Third-party patches are what keeps open source projects running and current. It is impossible for a single team to follow up on all platforms and configurations this package can be operated with. We want to keep it as easy as possible to contribute changes that get things working in your environment. There are a few guidelines that we need contributors to follow so that we can have a chance of keeping on top of things.

## Getting started
* Make sure you have a [GitHub account](https://github.com/signup/free).
* Submit a ticket for your issue if one does not already exist.
	* Clearly describe the issue including steps to reproduce when it is a bug.
	* Make sure you fill in the earliest version that you know has the issue.
* Fork the repository on GitHub.

## Making changes
* Create a topic branch from where you want to base your work.
	* This is usually the master branch.
	* Only target release branches if you are certain your fix must be on that branch.
	* To quickly create a topic branch based on master, run `git checkout -b fix/master/my_contribution master`. Please avoid working directly on the `master` branch.
	* Make commits of logical and atomic units.
	* Check for unnecessary whitespace with `git diff --check` before committing.
	* Make sure your commit messages are in the proper format. If the commit addresses an issue filed in the issue tracker, start the first line of the commit with the issue number in parentheses.
	* Make sure you have added the necessary tests for your changes.

## Code formating
Please keep the code format and styling to the format already provided in the base code.

## Submit changes
* Push your changes to a topic branch in your fork of the repository.
* Submit a pull request to the original repository.
* Update your issue ticket to mark that you have submitted code and are ready for it to be reviewed (Status: Ready for Merge).
* Pull Requests are reviewed on a regular basis by the project maintainer.
* After feedback has been given we expect responses within two weeks. After two weeks we may close the pull request if it isn't showing any activity.

## Additional resources
* [Issue tracker](https://github.com/brians-open-source-stuff/express-log-errors/issues)
* [General GitHub documentation](https://help.github.com/)
* [GitHub pull-request documentation](https://help.github.com/articles/creating-a-pull-request/)