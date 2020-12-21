__NUXT_JSONP__("/plugins/limit", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H){return {data:[{document:{slug:t,title:t,position:59,category:"Plugins",toc:[{id:o,depth:m,text:o},{id:u,depth:w,text:x},{id:p,depth:m,text:p},{id:q,depth:m,text:q},{id:y,depth:w,text:z},{id:r,depth:m,text:r},{id:A,depth:m,text:B},{id:C,depth:m,text:D}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"Apply several types of limits to SMTP connections."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Each limit type has a max value that can be defined in limit.ini. The default is empty \u002F disabled until a value has been set."}]},{type:a,value:c},{type:b,tag:n,props:{id:o},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#concurrency",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:s},{type:b,tag:e,props:{},children:[{type:a,value:"[concurrency]max"}]},{type:a,value:" is defined, it limits the maximum number of simultaneous connections per IP address. Connection attempts in excess of the limit are delayed for "},{type:b,tag:e,props:{},children:[{type:a,value:"disconnect_delay"}]},{type:a,value:" seconds (default: 3) before being disconnected."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This works best in conjunction with a history \u002F reputation database, so that\none can assign very low concurrency (1) to bad or unknown senders and higher\nlimits for reputable mail servers."}]},{type:a,value:c},{type:b,tag:E,props:{id:u},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#history",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"History: when enabled, the "},{type:b,tag:e,props:{},children:[{type:a,value:u}]},{type:a,value:" setting is the name of a plugin that stores IP history \u002F reputation results. The result store must have a positive value for good connections and negative integers for poor \u002F undesirable connections. Karma is one such plugin."}]},{type:a,value:c},{type:b,tag:n,props:{id:p},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#recipients",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:p}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:s},{type:b,tag:e,props:{},children:[{type:a,value:"[recipients]max"}]},{type:a,value:" is defined, each connection is limited to that number of recipients. The limit is imposed against "},{type:b,tag:"strong",props:{},children:[{type:a,value:"all"}]},{type:a,value:" recipient attempts. Attempts in excess of the limit are issued a temporary failure."}]},{type:a,value:c},{type:b,tag:n,props:{id:q},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#unrecognized_commands",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:q}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:s},{type:b,tag:e,props:{},children:[{type:a,value:"[unrecognized_commands]max"}]},{type:a,value:" is set, a connection that exceeeds the limit is disconnected."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Unrecognized commands are normally SMTP verbs invalidly issued by the client.\nExamples:"}]},{type:a,value:c},{type:b,tag:v,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"issuing AUTH when we didn't advertise AUTH extension"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"issuing STARTTLS when we didn't advertise STARTTLS"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"invalid SMTP verbs"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:E,props:{id:y},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#limitations",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The unrecognized_command hook is used by the "},{type:b,tag:e,props:{},children:[{type:a,value:"tls"}]},{type:a,value:" and "},{type:b,tag:e,props:{},children:[{type:a,value:"auth"}]},{type:a,value:" plugins, so\nrunning this plugin before those would result in valid operations getting\ncounted against that connections limits. The solution is simple: list\n"},{type:b,tag:e,props:{},children:[{type:a,value:t}]},{type:a,value:" in config\u002Fplugins after those."}]},{type:a,value:c},{type:b,tag:n,props:{id:r},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#errors",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:s},{type:b,tag:e,props:{},children:[{type:a,value:"[errors]max"}]},{type:a,value:" is set, a connection that exceeeds the limit is disconnected. Errors that count against this limit include:"}]},{type:a,value:c},{type:b,tag:v,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"issuing commands out of turn (MAIL before EHLO, RCPT before MAIL, etc)"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"attempting MAIL on port 465\u002F587 without AUTH"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"MAIL or RCPT addresses that fail to parse"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"h1",props:{id:"error-handling"},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#error-handling",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:"Error Handling"}]},{type:a,value:c},{type:b,tag:n,props:{id:A},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#too-high-counters",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If the NoSQL store is Redis and Haraka is restarted or crashes while active\nconnections are open, the concurrency counters might be inflated. This is\nhandled by the [concurrency]reset setting (default: 10m), which:"}]},{type:a,value:c},{type:b,tag:v,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"ssc: sets collection expiration time"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"redis: empties the concurrency hash"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"RAM: empties the in-memory hash of all keys"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{id:C},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#too-low-counters",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Because the redis and RAM objects are emptied periodically, connections that\nare open while the collections are emptied will be too low. When\nthat happens, log messages like these might be emitted:"}]},{type:a,value:c},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-text","line-numbers"]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"resetting 0 to 1\nresetting -1 to 1\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This is a harmless error condition that is repaired automatically."}]}]},dir:"\u002Fen\u002Fplugins",path:"\u002Fen\u002Fplugins\u002Flimit",extension:".md",createdAt:F,updatedAt:F,to:"\u002Fplugins\u002Flimit"},prev:{slug:G,title:G,to:"\u002Fplugins\u002Fmax_unrecognized_commands"},next:{slug:H,title:H,to:"\u002Fplugins\u002Fmessagesniffer"}}],fetch:[],mutations:[]}}("text","element","\n","p","code","a","true",-1,"span","icon","icon-link","li",2,"h2","concurrency","recipients","unrecognized_commands","errors","When ","limit","history","ul",3,"History","limitations","Limitations","too-high-counters","Too high counters","too-low-counters","Too low counters","h3","2020-12-21T21:34:14.372Z","max_unrecognized_commands","messagesniffer")));