---
layout: post
title: Use Facebook&#039;s 2-factor Authentication with Third-Party TOTP Generators
date: 2013-01-15 16:08
comments: true
categories:
  - Tutorial
tags:
  - hack
  - authentication
  - security
  - facebook
---
If you don't know what <a href="http://en.wikipedia.org/wiki/Two_factor_authentication" target="_blank">2-Factor Authentication</a> is, you can read up about it <a href="http://support.google.com/accounts/bin/answer.py?hl=en&amp;answer=180744" target="_blank">here</a>. Essentially it is a service that makes it nearly impossible for any of your online accounts to be hacked, by requiring two forms of authentication: something you know (a password) and something you have (a mobile phone). Google provides a great, open <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&amp;hl=en" target="_blank">application</a> for iPhone and Android that generates one time use codes that you enter into a website when you login. Many online services offer this such as Google, Facebook, Blizzard games, banking websites, etc.

Facebook offers 2-Factor Authentication (in the form of "<a href="https://www.facebook.com/note.php?note_id=10150172618258920" target="_blank">Login Approvals</a>"), but it's somewhat difficult to setup third-party code generator applications with their service. They would prefer that you use text messaging or their Facebook mobile app to get your codes, but it is possible to use Google Authenticator or another application. Here's a step-by-step guide on how to use a third-party app:

1. Login to <a href="https://www.facebook.com/" target="_blank">Facebook</a>.
2. Navigate to <a href="https://www.facebook.com/settings?ref=mb" target="_blank">Account Settings</a>, then <a href="https://www.facebook.com/settings?tab=security" target="_blank">Security</a>.
3. Look for Login Approvals, and click Edit.
4. If you haven't already, enable the Login Approvals feature.
5. Click the Set up Code Generator link.
6. When the modal dialog appears, click Next.
7. Click the Having trouble? link.
8. On the following page, click the Get Key button.
9. You can then enter this key into any <a href="http://en.wikipedia.org/wiki/Time-based_One-time_Password_Algorithm" target="_blank">Time-based One Time use Password (TOTP)</a> generator like Google Authenticator for iPhone and Android or my Authenticator app for Windows Phone.
10. After entering this key into the TOTP generator of your choice, click Continue.
11. Enter your current one-time use code generated by your phone and click Continue to save these settings.
12. You can now use your phone to generate your login approval code without having to wait for a text message.

You can download the Google Authenticator app for <a href="https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8" target="_blank">iPhone</a> and <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&amp;hl=en" target="_blank">Android</a> online. If you're a Windows Phone user, you can download my <a href="http://www.windowsphone.com/en-us/store/app/authenticator/82c12390-0176-43de-916e-5613d17f61a0" target="_blank">Authenticator</a> app and add your Facebook account using the steps above.