waterfall layout has been implemented using three methods: javascript, jQuery, CSS3.
特点比较：1.javascript原生方法，需要计算，列数=浏览器窗口宽度、图片宽度；图片定位是根据每一列数据的高度，计算下来图片的位置。
          2.图片排序是按照图片计算的位置横向排列，位置是计算出来的，比较规范。
CSS3方法：1.不需要计算，浏览器自动计算，只需要设置列宽，性能比较高。
          2.随着浏览器窗口的改变，用户体验不好。
          3.图片排序按照垂直顺序排列，打乱了图片的显示顺序。
          4.图片随着滚动轴进行加载还需要javascript实现。
