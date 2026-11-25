"use strict";
function decide(context){
  const roles=["student","owner","admin"], incidents=["phishing","account","website","routine","unknown"], signals=["none","suspected","confirmed"], resources=["basic","team"];
  if(!context||!roles.includes(context.role)||!incidents.includes(context.incident)||!signals.includes(context.signal)||!resources.includes(context.resources))throw new TypeError("Choose valid context values.");
  const urgent=context.signal==="confirmed", suspected=context.signal==="suspected", role=context.role, issue=context.incident;
  const priority=urgent?"Urgent":suspected?"High":"Routine";
  const steps=[];
  const add=(action,why)=>steps.push({action,why});
  if(issue==="phishing"){add("Do not open links, attachments, or reply to the message.","This avoids further interaction with suspicious content.");add("Verify the sender through a separate trusted channel.","A familiar display name does not prove identity.");}
  if(issue==="account"){add("Use the official account recovery or security page from a trusted device.","Avoid recovery links supplied in suspicious messages.");add("Review recent sign-ins and revoke unfamiliar sessions if authorized.","This can limit continued unauthorized access.");}
  if(issue==="website"){add("Review hosting-provider status, logs and recent changes using authorized access.","An outage alone does not establish a cyberattack.");add("Preserve relevant timestamps and logs without sharing secrets.","Evidence supports diagnosis and later incident review.");}
  if(issue==="routine"){add("Enable multifactor authentication on important accounts.","A second factor reduces exposure from stolen passwords.");add("Review updates and verify a recent backup can be restored.","Prevention and recovery reduce avoidable disruption.");}
  if(issue==="unknown"){add("Write down what changed and when; avoid altering suspicious evidence.","The available context does not establish an incident type.");add("Check official status and contact an authorized support channel.","Independent verification helps narrow the cause.");}
  if(urgent){steps.unshift({action:role==="admin"?"Follow the approved incident-response plan and escalate to the incident lead.":role==="owner"?"Contact your authorized hosting or IT provider promptly.":"Contact your institution or account provider using official details.",why:"You reported a confirmed security issue; timely authorized response matters."});}
  else if(suspected){add("Ask authorized support to verify the signs before taking disruptive action.","Suspicion alone is not proof of compromise.");}
  if(context.resources==="basic")add("Use built-in security settings and official provider support first.","Your available resources are limited; no paid tool is required to begin.");
  else add("Assign a responsible team member and record the next review time.","Your team can coordinate verification and track follow-up.");
  if(role==="student")add("Do not share passwords, OTPs or identity documents in the report.","Personal data should stay private.");
  if(role==="owner")add("Record business impact and notify the responsible team if service is affected.","Business continuity informs escalation.");
  if(role==="admin")add("Record the scope of authorization and obtain approval before containment.","Avoid disruptive actions on unrelated systems.");
  return {priority,reason:"Priority reflects your reported evidence level, not an independently verified threat score.",steps,limitation:"Advisory only. This assistant does not scan, diagnose, block, contact anyone or verify a compromise."};
}
if(typeof module!=="undefined"&&module.exports)module.exports={decide};
