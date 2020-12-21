__NUXT_JSONP__("/plugins/clamd", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R){return {data:[{document:{slug:u,title:u,position:42,category:"Plugins",toc:[{id:x,depth:v,text:y},{id:z,depth:k,text:A},{id:B,depth:k,text:C},{id:D,depth:k,text:E},{id:F,depth:k,text:G},{id:H,depth:k,text:I},{id:J,depth:k,text:K},{id:L,depth:k,text:M},{id:N,depth:v,text:O},{id:P,depth:v,text:Q}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"This plug-in implements Anti-Virus scanning with ClamAV using the "},{type:b,tag:"strong",props:{},children:[{type:a,value:u}]},{type:a,value:"\ndaemon."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The plug-in will reject any message that ClamAV considers to be a virus.\nIf an error occurs (e.g. clamd not running or a timeout), the\nmessage will be deferred with a temporary failure."}]},{type:a,value:c},{type:b,tag:w,props:{id:x},children:[{type:b,tag:e,props:{ariaHidden:f,href:"#configuration",tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The following options can be defined in clamd.ini;"}]},{type:a,value:c},{type:b,tag:l,props:{id:z},children:[{type:b,tag:e,props:{ariaHidden:f,href:"#clamd_socket-default-localhost3310",tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"N.N.N.N:port, [ipv6::literal]:port, host:port or \u002Fpath\u002Fto\u002Fsocket of\nthe clamd daemon."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Multiple hosts can be listed separated by comma, semi-colon or spaces."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If :port is omitted it defaults to 3310."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"On connection error or timeout the next host in the list will be tried.\nWhen the host list is exhausted, the message will be deferred with\na temporary failure."}]},{type:a,value:c},{type:b,tag:l,props:{id:B},children:[{type:b,tag:e,props:{ariaHidden:f,href:"#randomize_host_order-default-false",tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If this is set then the list of hosts with be randomized before a\nconnection is attempted."}]},{type:a,value:c},{type:b,tag:l,props:{id:D},children:[{type:b,tag:e,props:{ariaHidden:f,href:"#only_with_attachments-------------------------default-false",tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Set this option to only scan messages that contain non-textual\nattachments.  This is a performance optimization, however it will\nprevent ClamAV from detecting threats such as Phishing in plain-text\nor HTML messages."}]},{type:a,value:c},{type:b,tag:l,props:{id:F},children:[{type:b,tag:e,props:{ariaHidden:f,href:"#connect_timeout-------------------------------default-10",tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Timeout connection to host after this many seconds.  A timeout will\ncause the next host in the list to be tried.  Once all hosts have\nbeen tried then a temporary failure will be returned."}]},{type:a,value:c},{type:b,tag:l,props:{id:H},children:[{type:b,tag:e,props:{ariaHidden:f,href:"#timeout---------------------------------------default-30",tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Post-connection timeout if there is no activity on the socket after\nthis many seconds.  A timeout will cause the message to be rejected\nwith a tempoary failure."}]},{type:a,value:c},{type:b,tag:l,props:{id:J},children:[{type:b,tag:e,props:{ariaHidden:f,href:"#max_size--------------------------------------default-26214400",tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The maximum size of message that should be sent to clamd in bytes.\nThis option should not be larger than the StreamMaxLength value in\nclamd.conf as clamd will stop scanning once this limit is reached.\nIf the clamd limit is reached the plug-in will log a notice that\nthis has happened and will allow the message though."}]},{type:a,value:c},{type:b,tag:l,props:{id:L},children:[{type:b,tag:e,props:{ariaHidden:f,href:"#reject",tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"An optional reject section can offer control over when to reject connections.\nThe default settings are shown. ClamAV recommends that hits coming from\nSafeBrowsing \u002F Phishing \u002F Heuristics, Potentially Unwanted Applications, and\nUNOFFICIAL be used only for scoring."}]},{type:a,value:c},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p,q]},children:[{type:b,tag:r,props:{},children:[{type:a,value:"* virus=true\n* error=true\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The following reject options are disabled by default in clamd.conf. With a\ndefault ClamAV install, these will have no effect. When an admin enables in\nclamd.conf, Haraka with then, by default, reject such messages. Adjust these\nsettings to suit."}]},{type:a,value:c},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p,q]},children:[{type:b,tag:r,props:{},children:[{type:a,value:"* Broken.Executable=true\n* Structured=true\n* Encrypted=true\n* PUA=true\n* OLE2=true\n* Safebrowsing=true\n* UNOFFICIAL=true\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The following options are enabled by default in clamd but ClamAV suggests\nusing them only for scoring."}]},{type:a,value:c},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p,q]},children:[{type:b,tag:r,props:{},children:[{type:a,value:"* Phishing=false\n"}]}]}]},{type:a,value:c},{type:b,tag:w,props:{id:N},children:[{type:b,tag:e,props:{ariaHidden:f,href:"#check",tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:O}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The optional check section can allow skipping ClamAV check for remote connection\nmeeting following criteria."}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"authenticated"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:t}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If true, messages from authenticated users will be scanned."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"private_ip"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:t}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If true, messages from private IPs will be scanned."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"local_ip"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:t}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If true, messages from localhost will be scanned."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"relay"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:t}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If true, messages that are to be relayed will be scanned."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:w,props:{id:P},children:[{type:b,tag:e,props:{ariaHidden:f,href:"#clamdexcludes",tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:Q}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This file can contain a list of virus name patterns that when matched, are\nnot rejected by this plugin. An X-Haraka-Virus: header will be inserted\ncontaining the virus name. This header can then be used for scoring\nin other plugins."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The format of the file is one pattern per line. Comments are prefixed\nwith #. Matches are case-insensitive."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Patterns are expressed using wildcards (e.g. * and ?) or\nvia regexp by enclosing the pattern in \u002F\u002F."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"To negate a match (e.g. reject if it matches), prefix the match with !.\nNegative matches are always tested fist."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Example:"}]},{type:a,value:c},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p,q]},children:[{type:b,tag:r,props:{},children:[{type:a,value:"# Always reject test signatures\n!*.TestSig_*\n# Skip all unofficial signatures\n*.UNOFFICIAL\n# Phishing\nHeuristics.Phishing.*\n"}]}]}]}]},dir:"\u002Fen\u002Fplugins",path:"\u002Fen\u002Fplugins\u002Fclamd",extension:".md",createdAt:R,updatedAt:R,to:"\u002Fplugins\u002Fclamd"},prev:{slug:"connect.p0f",title:"connect.p0f - TCP Fingerprinting",to:"\u002Fplugins\u002Fconnect.p0f"},next:{slug:"connect.geoip",title:"geoip",to:"\u002Fplugins\u002Fconnect.geoip"}}],fetch:[],mutations:[]}}("text","element","\n","p","a","true",-1,"span","icon","icon-link",3,"h3","div","nuxt-content-highlight","pre","language-text","line-numbers","code","li","Default: true","clamd",2,"h2","configuration","Configuration","clamd_socket-default-localhost3310","clamd_socket (default: localhost:3310)","randomize_host_order-default-false","randomize_host_order (default: false)","only_with_attachments-------------------------default-false","only_with_attachments                         (default: false)","connect_timeout-------------------------------default-10","connect_timeout                               (default: 10)","timeout---------------------------------------default-30","timeout                                       (default: 30)","max_size--------------------------------------default-26214400","max_size                                      (default: 26214400)","reject","[reject]","check","[check]","clamdexcludes","clamd.excludes","2020-12-21T21:34:14.372Z")));