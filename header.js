/* load in header. suggest copy paste, not <script src 
andrew andy@andyt.co https://github.com/andrewtranter/jQuery_deferred_compat */
window.JQP={JQ:1,JQT:0,JQa:0};
window.JQ = window.JQ || {f:[]};
window.$ = window.jQuery = function()
{
	if(arguments && arguments[0] && typeof arguments[0] == 'function') window.JQ['f'].push(arguments);
	var a = arguments;
	return new Proxy(JQP,
	{
		get(target, name)
		{
			if(name.substring(0,2)=='JQ')return Reflect.get(...arguments);
			if(!window.JQ[name]) window.JQ[name] = [];
			return function(){  window.JQ[name].push([a,arguments]);  }
		}
	});
}
