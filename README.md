# jQuery_deferred_compat
Allow jQuery to be defer or async loaded by queuing jQueries to be processed later

---

jQuery is a massive bloated library and is slowing down the load times of a Wordpress project.

It is usually not required until after the page is loaded, and sometimes not even then!. So I wanted to defer (or async) load jQuery. But many Wordpress plugins, themes, and even Wordpress internals call jQuery directly with no regard or concern if its ready to go or not.

It was too difficult to change everything.

Instead, I created this small far less bloated javascript snippet for use in the header to allow all those jQuery calls to work. They are queued for whenever the actual jQuery library is loaded, and then run.

---

202111 - Currently in use on only two production sites.

Please let me know if you find it useful.


## Result
### before:
   `Uncaught ReferenceError: jQuery is not defined`
### after:
  .. uh .. it just works instead.


## Example Usage:
```
<html>
  <head>
    <script language="javascript">
      ... see header.js ... suggest copy paste it here ...
    </script>
  </head>
  <body>
    ...
    <script language="javascript">
      //jQuery stuff happens ... how about this:
      $( document ).ready(function(){ console.log('jQuery is ready!'); });
    </script>
    ...
    <script language="javascript" src="footer.js" defer></script>
  </body>
</html>
```
