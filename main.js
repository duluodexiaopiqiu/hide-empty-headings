const { Plugin } = require('obsidian');

module.exports = class HideEmptyHeadingsPlugin extends Plugin {
  async onload() {
    this.registerEvent(
      this.app.workspace.on('layout-change', () => this.run())
    );
    this.registerEvent(
      this.app.workspace.on('file-open', () => this.run())
    );
    this.run();
  }

  run() {
    setTimeout(() => {
      const previews = document.querySelectorAll(
        '.markdown-reading-view .markdown-preview-section'
      );
      previews.forEach(preview => {
        const children = Array.from(preview.children);
        this.processHeadings(children);
      });
    }, 300);
  }

  // 判断从 startIndex 开始、到同级或更高级标题结束的区间内，是否有实际内容
  hasContentUnder(children, startIndex, headingLevel) {
    for (let j = startIndex + 1; j < children.length; j++) {
      const sibling = children[j];
      const siblingHeading = sibling.querySelector('h1, h2, h3, h4, h5, h6');

      if (siblingHeading) {
        const siblingLevel = parseInt(siblingHeading.tagName[1]);
        // 遇到同级或更高级标题，停止搜索
        if (siblingLevel <= headingLevel) break;
        // 遇到子标题，递归检查子标题下是否有内容
        if (this.hasContentUnder(children, j, siblingLevel)) {
          return true;
        }
      } else {
        // 非标题元素，检查是否有文字
        if (sibling.textContent.trim() !== '') {
          return true;
        }
      }
    }
    return false;
  }

  processHeadings(children) {
    children.forEach((el, i) => {
      const heading = el.querySelector('h1, h2, h3, h4, h5, h6');
      if (!heading) return;

      const headingLevel = parseInt(heading.tagName[1]);
      const hasContent = this.hasContentUnder(children, i, headingLevel);
      el.style.display = hasContent ? '' : 'none';
    });
  }
};