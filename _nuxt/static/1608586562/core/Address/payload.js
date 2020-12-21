__NUXT_JSONP__("/core/Address", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){return {data:[{document:{slug:"Address",title:"Address Object",position:g,category:"Core",toc:[{id:h,depth:g,text:i},{id:j,depth:g,text:k}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"The Address object is an interface to reading email addresses passed in at\nSMTP time. As such it parses all the formats in RFC-2821 and 2822, and\nsupports correctly escaping email addresses."}]},{type:a,value:c},{type:b,tag:l,props:{id:h},children:[{type:b,tag:m,props:{ariaHidden:n,href:"#api",tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:i}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"new Address (user, host)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Create a new address object for user@host"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"new Address (email)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Creates a new address object by parsing the email address. Will throw an\nexception if the address cannot be parsed."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"address.user"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Access the local part of the email address"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"address.host"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Access the domain part of the email adress"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"address.format()"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Provides the email address in the appropriate "},{type:b,tag:s,props:{},children:[{type:a,value:"\u003Cuser@host\u003E"}]},{type:a,value:" format. And\ndeals correctly with the null sender and local names."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"address.toString()"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Same as format()."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"address.address()"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Provides the email address in 'user@host' format."}]},{type:a,value:c},{type:b,tag:l,props:{id:j},children:[{type:b,tag:m,props:{ariaHidden:n,href:"#advanced-usage",tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:k}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"It is possible to mess with the regular expressions used to match addresses\nfor stricter or less strict matching."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"To change the behaviour mess with the following variables:"}]},{type:a,value:c},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-text","line-numbers"]},children:[{type:b,tag:s,props:{},children:[{type:a,value:"var adr = require('.\u002Faddress');\n\u002F\u002F Now change one of the following. Note they are RegExp objects NOT strings.\nadr.atom_expr;\nadr.address_literal_expr;\nadr.subdomain_expr;\nadr.domain_expr;\nadr.qtext_expr;\nadr.text_expr;\n\u002F\u002F Don't forget to recompile:\nadr.compile_re();\n"}]}]}]}]},dir:"\u002Fen\u002Fcore",path:"\u002Fen\u002Fcore\u002FAddress",extension:".md",createdAt:t,updatedAt:t,to:"\u002Fcore\u002FAddress"},prev:{slug:"about",title:"About",to:"\u002Fabout"},next:{slug:"community",title:"Community",to:"\u002Fcommunity"}}],fetch:[],mutations:[]}}("text","element","\n","p","ul","li",2,"api","API","advanced-usage","Advanced Usage","h2","a","true",-1,"span","icon","icon-link","code","2020-12-21T21:34:14.368Z")));