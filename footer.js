/* load in footer, copy paste, or can be a file that is async/defer loaded.
andrewtr andy@andyt.co https://github.com/andrewtranter/jQuery_deferred_compat */
window.addEventListener('DOMContentLoaded', JQgo );
window.addEventListener('load', JQgo );//both ... because of apple

function JQgo()
{
	console.log('JQgo');

	if(jQuery().JQ)
	{
		jQuery().JQa++;
		if(jQuery().JQT) clearTimeout(jQuery().JQT);
		if(jQuery().JQa < 20) jQuery().JQT = setTimeout(function(){JQgo()},jQuery().JQa*50);
		return;
	}

	for(var t in window.JQ)
	{
		for(var q of window.JQ[t])
		{
			if(t == 'f')window['jQuery'].apply(jQuery,q);
			else 
			{
				var context = jQuery(q[0]);
				context[t].apply(context,q[1]);
			}
		}
	}
	window.JQ = [];
}
