function AskPage () {
  var self = this;
  AskPage.super_.call(self);
  self.url = '/ask';

  // Question title
  Object.defineProperty(self, 'qnaQuestionTitleElement', {
    get: function () {
      return element(by.className('ss-ask-title-input'));
    }
  });

  Object.defineProperty(self, 'qnaQuestionTitle', {
    get: function () {
      return self.qnaQuestionTitleElement.getAttribute('value');
    }
  });

  self.enterQnaQuestionTitle = function (title) {
    return self.qnaQuestionTitleElement
      .clear()
      .sendKeys(title);
  };

  // Question content
  Object.defineProperty(self, 'qnaQuestionContentElement', {
    get: function () {
      return element(by.css('.markdown-input'));
    }
  });

  Object.defineProperty(self, 'qnaQuestionContent', {
    get: function () {
      return self.qnaQuestionContentElement.getAttribute('value');
    }
  });

  Object.defineProperty(self, 'qnaQuestionPreviewTab', {
    get: function () {
      return element(by.className('ss-markdown-editor-preview-tab'));
    }
  });

  Object.defineProperty(self, 'qnaQuestionPreviewElement', {
    get: function () {
      return element(by.css('.ss-markdown-editor-preview div'));
    }
  });

  self.enterQnaQuestionContent = function (content) {
    return self.qnaQuestionContentElement
      .clear()
      .sendKeys(content);
  };

  self.previewQnaQuestionContent = function () {
    return self.qnaQuestionPreviewTab.click();
  };

  // Question tags
  Object.defineProperty(self, 'qnaQuestionTagsElement', {
    get: function () {
      return element(by.model('newTag.text'));
    }
  });

  Object.defineProperty(self, 'qnaQuestionTags', {
    get: function () {
      var tags = element.all(by.css('li.tag-item span')).map(function(elm, index) {
        return elm.getText();
      });
      return tags;
    }
  });

  self.enterQnaQuestionTag = function (tag) {
    return self.qnaQuestionTagsElement
      .clear()
      .sendKeys(tag)
      .sendKeys(protractor.Key.ENTER);
  };

  // Submit button
  Object.defineProperty(self, 'qnaQuestionSubmitElement', {
    get: function () {
      return element(by.buttonText('Post Your Question'));
    }
  });

  Object.defineProperty(self, 'qnaQuestionSubmitIsDisabled', {
    get: function () {
      return self.qnaQuestionSubmitElement.getAttribute('disabled');
    }
  });

  self.submitQnaQuestion = function () {
    return self.qnaQuestionSubmitElement.click();
  };

}

var me = AskPage;
me.pageName = 'ask';
World.addPage(me);
