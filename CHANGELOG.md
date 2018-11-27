# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
* Sanitize paths to prevent saving logs in dangerous places.
* Support for deeper log paths (currently, the log path can only be one directory deep).

## [2.0.0] - 2018-11-27
### Changed
* `logErrors` parameter list has been changed. You can now only define a name for the log file. See documentation.

### Removed
* Options parameter: You can no longer define options for logErrors in an object literal. Instead, use `logname`. See documentation.

## [1.1.1] - 2018-11-27
### Added
* Secret easter-egg
* Plans for future version regarding
	* Sanitized paths (security)
	* Posibility of defining deep log paths

## [1.1.0] - 2018-11-12
### Changed
* Better logical naming of lib files

## [1.0.0] - 2018-11-10
### Changed
* Internal file structure has been moved around for a more structured project.

## [0.1.0] - 2018-11-10
### Added
* This changelog for a better overview of the project
* Contribution guidelines