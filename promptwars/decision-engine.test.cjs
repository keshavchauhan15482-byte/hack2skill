"use strict";
const {test}=require("node:test");const assert=require("node:assert/strict");const {decide}=require("./decision-engine.js");
for(const role of ["student","owner","admin"])for(const incident of ["phishing","account","website","routine","unknown"])for(const signal of ["none","suspected","confirmed"])for(const resources of ["basic","team"]){test([role,incident,signal,resources].join(" "),()=>{const r=decide({role,incident,signal,resources});assert.equal(r.priority,({none:"Routine",suspected:"High",confirmed:"Urgent"})[signal]);assert.ok(r.steps.length>=3);assert.ok(r.steps.every(s=>s.action&&s.why));assert.match(r.limitation,/does not scan/);});}
test("rejects invalid contexts",()=>assert.throws(()=>decide({role:"invalid"}),TypeError));
test("responds differently to role and resources",()=>{const a={role:"student",incident:"account",signal:"confirmed",resources:"basic"};assert.notDeepEqual(decide(a),decide({...a,role:"admin",resources:"team"}));});
