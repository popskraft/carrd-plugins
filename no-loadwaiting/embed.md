# No Loadwaiting — Embed Code

Version: `1.0.0`

This plugin is already installed in the template. Use this code to update it by hand or to add it to another Carrd site.

## Update an Installed Copy

1. In Carrd, open the `No Loadwaiting` Embed element.
2. Replace all of its code with the code below.
3. Publish and check the plugin on the page.

## Add to a Site

1. Add an `Embed` element at the end of the page, set to `Hidden → Head`.
2. Paste the code and title the element `No Loadwaiting`.
3. Publish and check the plugin on the page.

## Code

```html
<!-- Plugin: No Loadwaiting | Version: 1.0.0 -->
<script>
(function(){'use strict';const DEFAULTS={animationDuration:750,observerTimeout:5000,scrollPulseInterval:120,scrollPulseCount:2,rafPulseCount:2};const externalOptions=(typeof window!=='undefined'&&((window.CarrdPluginOptions&&window.CarrdPluginOptions.noLoadwaiting)))||{};const CONFIG={};for(const key in DEFAULTS){CONFIG[key]=Object.prototype.hasOwnProperty.call(externalOptions,key)?externalOptions[key]:DEFAULTS[key];}let initialized=false;let cachedBody=null;let classObserver=null;let childObserver=null;let observerTimeoutId=null;let pulseTimer=null;let rafId=null;function getBody(){if(cachedBody&&cachedBody.isConnected)return cachedBody;cachedBody=document.body;return cachedBody;}function markReadyNow(){const body=getBody();if(!body)return;body.classList.remove('is-loading','with-loader');if(!body.classList.contains('is-ready')){body.classList.add('is-ready');body.classList.add('is-playing');setTimeout(function(){body.classList.remove('is-playing');},CONFIG.animationDuration);}}function hideLoaderIfPresent(){const loader=document.getElementById('loader');if(!loader)return false;loader.style.setProperty('display','none','important');loader.style.setProperty('visibility','hidden','important');loader.style.setProperty('opacity','0','important');loader.style.setProperty('pointer-events','none','important');loader.setAttribute('aria-hidden','true');return true;}function kickScrollHandlers(){if(pulseTimer!==null){clearInterval(pulseTimer);pulseTimer=null;}if(rafId!==null){cancelAnimationFrame(rafId);rafId=null;}dispatchLayoutEvents();let pulses=0;pulseTimer=setInterval(function(){if(++pulses>CONFIG.scrollPulseCount){clearInterval(pulseTimer);pulseTimer=null;return;}dispatchLayoutEvents();},CONFIG.scrollPulseInterval);let rafPulses=0;(function rafTick(){if(++rafPulses>CONFIG.rafPulseCount){rafId=null;return;}dispatchLayoutEvents();rafId=requestAnimationFrame(rafTick);})();}function dispatchLayoutEvents(){try{window.dispatchEvent(new Event('resize'));}catch(e){}}function setupObservers(){const body=getBody();if(!body)return;if(classObserver)classObserver.disconnect();if(childObserver)childObserver.disconnect();if(observerTimeoutId!==null){clearTimeout(observerTimeoutId);observerTimeoutId=null;}classObserver=new MutationObserver(function(){if(body.classList.contains('with-loader')){body.classList.remove('with-loader');}});childObserver=new MutationObserver(function(){if(hideLoaderIfPresent()){childObserver.disconnect();childObserver=null;}});classObserver.observe(body,{attributes:true,attributeFilter:['class'],});childObserver.observe(body,{childList:true});observerTimeoutId=setTimeout(function(){if(classObserver){classObserver.disconnect();classObserver=null;}if(childObserver){childObserver.disconnect();childObserver=null;}observerTimeoutId=null;},CONFIG.observerTimeout);}function init(){if(initialized)return;try{markReadyNow();hideLoaderIfPresent();setupObservers();kickScrollHandlers();initialized=true;}catch(e){console.warn('early-animate-override failed:',e);}}if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init,{once:true});}else{init();}})();
</script>
```
