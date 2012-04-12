(function(Daisy,$){
	/**
	 * 一个通用高亮词法器，直接返回整个文本区域，不设置任何高亮颜色。
	 * 这个实际上是一个高亮词法器的接口，通过三个公开函数向editor传递高亮规则
	 * setEditor:设置文本源
	 * lex : 词法解析过程.
	 * hasMore: 是否已经解析到末尾。
	 * start: 开始解析
	 * 
	 * 当前版本还未考虑文本折叠的功能。在以后考虑之后可能会在lex模块增加新的接口。
	 */
	Daisy.Lexer.General = function(editor) {
		this.editor = editor;
		this.source = null;
		this.theme = editor.theme;
		this.has_more = false;
		this.cur_style_range = null;
	}
	Daisy.Lexer.General.prototype={
		lex : function(){
			this.source = this.editor.doc.text_array;
			this.editor.doc.setColor(0,this.source.length,'default');
		}
	}	
})(Daisy,Daisy.$);