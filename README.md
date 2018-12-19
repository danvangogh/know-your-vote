# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


Instructions 

* Run `bundle install`
  * `curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -` 
  *  `echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list`
  <!-- * `sudo apt-get update && sudo apt-get install yarn`
  * `sudo apt-get install yarn`
  * `sudo apt-get update` -->
  * `sudo apt-get install apt-transport-https`
  * `sudo apt-get update`
  * `sudo apt-get install yarn`
* Run  `yarn install`
* Run `rails server`