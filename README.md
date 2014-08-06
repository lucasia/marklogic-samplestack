# marklogic-samplestack

README for Version 1.0.0-ea2

A complete application that demonstrates using MarkLogic in a three-tier application architecture.

The application implements a "Question and Answer" Scenario.

This repository contains two implementations of the application,

* One is for the Java Enterprise Developer, and implemented using Java, Spring, and Gradle.
* One is for the JavaScript developer, and implemented using JavaScript, node.js and Gulp.

These two applications share the same view of the three application tiers.

## Usage

### Prerequisites

* install MarkLogic and start it: http://ea.marklogic.com/download
* clone this repository:
```bash
git clone https://github.com/marklogic/marklogic-samplestack
```

### Java/Spring implementation

* ```cd appserver/java-spring```
* gradlew appserver

See README.md in appserver/java-spring for further information on the samplestack-java

### Browser/Web Application

*See the [README in the browser directory](browser/README.md)*

## License

Copyright © 2014 MarkLogic

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
