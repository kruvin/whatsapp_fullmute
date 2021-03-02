// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(
    tab.id,
    {code: 'a = document.getElementsByClassName("_2TiQe"); \
        new_state = !a[0].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.hidden; \
        for (let i = 0; i < a.length; i++) { \
          a[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.hidden = new_state; \
        } '});
});
