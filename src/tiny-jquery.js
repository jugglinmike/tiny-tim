
// Your implementation here.

$$ = function(arg, context){
	var foo = context || document;
	 if (!(this instanceof $$)) return new $$(arg,context);

	this.elems = foo.querySelectorAll(arg);

	//set numeric attributes
	for (var i = 0; i < this.elems.length; i++) {
		this[i] = this.elems[i];
	}
	this.length = this.elems.length;
};



$$.prototype.forEach = function(fn){
	for (var i = 0; i < this.elems.length; i++) {
	 fn.call(this.elems[i], this.elems[i], i);
	}
};

$$.prototype.length = Number();

tQuery = $$;


