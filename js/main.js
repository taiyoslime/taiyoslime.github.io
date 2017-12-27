(function() {
	$.getJSON("js/dat.json")
	 	.done(function(data){
			hljs.configure({tabReplace:"    "});
			$(".json").text(JSON.stringify(data, null , "\t"));
			$('.json').each(function(i, block) {
  				hljs.highlightBlock(block);
			})
		})
		.fail(function() {
		});
})();
