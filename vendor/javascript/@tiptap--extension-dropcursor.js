import{Extension as r}from"@tiptap/core";import{dropCursor as o}from"@tiptap/pm/dropcursor";const t=r.create({name:"dropCursor",addOptions(){return{color:"currentColor",width:1,class:void 0}},addProseMirrorPlugins(){return[o(this.options)]}});export{t as Dropcursor,t as default};

