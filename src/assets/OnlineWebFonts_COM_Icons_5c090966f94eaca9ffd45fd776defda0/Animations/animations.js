window.OnlineWebFonts_Animations=window.OnlineWebFonts_Animations||function(t){return"object"!=typeof t?this:{Config:{},Index:{Key:"www.onlinewebfonts.com",Id:null,Data:{Config:{Width:3,Opacity:1,StrokeDot:!0,Sequential:!0,Display:!0,Reverse:!1,Color:"#000000",Animate:"Linear"}},Svg:{},Path:[],Div:null,An:null,Dom:null,Pause:!1,Complete:null,Status:null},Run:function(t){this.Config=this.Index;var n=this.Config,e=n.Data;for(var i in e.Config)null!=t.Data.Config[i]&&(e.Config[i]=t.Data.Config[i]);return n.Id=t.Id,n.Data.Line=t.Data.Line,n.Data.Box=t.Data.Box,"function"==typeof t.Complete&&(n.Complete=t.Complete),"function"==typeof t.Status&&(n.Status=t.Status),this.Append().PathAppend(),this},Play:function(){var t=this;return t.Stop(),t.Config.An=requestAnimationFrame((function(n){t.Update(n)})),this},Pause:function(){return this.Config.Pause||(this.Config.Pause=!0,cancelAnimationFrame(this.Config.An)),this},Resume:function(){var t=this;return t.Config.Pause&&(t.Config.Pause=!1,requestAnimationFrame((function(n){t.ResumeUpdate(n)}))),this},Stop:function(){return this.Config.Div.innerHTML="",this.Append().PathAppend(),cancelAnimationFrame(this.Config.An),this},ResumeUpdate:function(t){var n=this,e=n.Config.Svg.Time.Data;e.Start=t-e.Elapsed,requestAnimationFrame((function(t){n.Update(t)}))},Update:function(t){var n=this,e=n.Config,i=e.Data,r=e.Svg.Time.Data;if(0==r.Start&&(r.Start=t),r.Elapsed=t-r.Start,r.Progress=n.Progress(r.Total,r.Start,r.Elapsed,i.Config.Animate),n.UpdatePath(),r.Progress<1){if(null!==e.Status){var a=Math.round(100*r.Progress);e.Status(99==a?100:a,e.Id)}n.Config.An=requestAnimationFrame((function(t){n.Update(t)}))}else null!==e.Complete&&e.Complete()},UpdatePath:function(){for(var t=this.Config.Svg.Time.Path,n=0;n<this.Config.Dom.length;n++){var e=this.PathElapsed(n);t[n].Progress=this.Progress(1,0,e,this.Config.Data.Config.Animate),this.SetLine(n)}},SetLine:function(t){var n=this.Config.Svg,e=n.Time.Path,i=this.Config.Dom,r=e[t].Progress*n.Path.Length[t];if(this.Config.Data.Config.Reverse)var a=-n.Path.Length[t]+r;else a=n.Path.Length[t]-r;i[t].style.strokeDashoffset=a},PathElapsed:function(t){var n,e=this.Config.Svg.Time,i=e.Path[t];return e.Data.Progress>i.StartPro&&e.Data.Progress<i.StartPro+i.Duration?n=(e.Data.Progress-i.StartPro)/i.Duration:e.Data.Progress>=i.StartPro+i.Duration?n=1:e.Data.Progress<=i.StartPro&&(n=0),n},Progress:function(t,n,e,i){var r;return e>0&&e<t?r=i?this.Ease[i](e,0,1,t):e/t:e>=t?r=1:e<=n&&(r=0),r},PathAppend:function(){var t=this.Config,n=t.Data,e=t.Svg.Time;e.Path=[];var i=n.Config.Reverse?e.Data.Total:0;for(var r in n.Line){var a=parseInt(n.Line[r].Duration),o=a/e.Data.Total;n.Config.Reverse?i-=a:i=n.Config.Sequential?e.Data.Delay:0;var u=i/e.Data.Total;e.Data.Delay+=a,e.Path[r]={Start:i,Duration:o,StartPro:u}}},Append:function(){var t=this.Config,n=t.Data,e=t.Svg,i=this.SVGElement();e.Path={},e.Time={},e.Time.Data={Start:0,Elapsed:0,Total:0,Duration:0,Progress:0,Delay:0},e.Path.Length=[];var r=0;for(var a in n.Line){var o={"fill-opacity":"0","stroke-linecap":n.Config.StrokeDot?"round":"butt","stroke-linejoin":"round",stroke:n.Line[a].Color?n.Line[a].Color:n.Config.Color,"stroke-opacity":n.Config.StrokeDot?n.Config.Opacity:"0","stroke-width":n.Line[a].Width?n.Line[a].Width:n.Config.Width,d:n.Line[a].Path},u=document.createElementNS("http://www.w3.org/2000/svg","path");for(var s in o)u.setAttribute(s,o[s]);var f=Math.ceil(u.getTotalLength());e.Path.Length[a]=f,u.setAttribute("style","stroke-dasharray:"+f+","+f+";stroke-dashoffset:"+(n.Config.Display?"0":f)+";"),i.appendChild(u),t.Path.push(u),0==n.Line[a].Duration&&(n.Line[a].Duration=this.GetPathDuration(n.Line[a].Path)),n.Config.Sequential?r+=parseInt(n.Line[a].Duration):parseInt(n.Line[a].Duration)>r&&(r=parseInt(n.Line[a].Duration))}return e.Time.Data.Total=r,t.Div=document.querySelector(t.Id),t.Div.appendChild(i),t.Dom=t.Div.children[0].childNodes,this},GetPathDuration:function(t){var n=document.createElementNS("http://www.w3.org/2000/svg","path");return n.setAttribute("d",t),Math.ceil(n.getTotalLength())},SVGElement:function(t){var n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("xmlns","http://www.w3.org/2000/svg");var e=this.Config.Data.Box.Width,i=this.Config.Data.Box.Height;return n.setAttribute("viewBox","0 0 "+e+" "+i),n},Ease:{Linear:function(t,n,e,i){return e*t/i+n},InQuad:function(t,n,e,i){return e*(t/=i)*t+n},OutQuad:function(t,n,e,i){return-e*(t/=i)*(t-2)+n},InOutQuad:function(t,n,e,i){return(t/=i/2)<1?e/2*t*t+n:-e/2*(--t*(t-2)-1)+n},InCubic:function(t,n,e,i){return e*(t/=i)*t*t+n},OutCubic:function(t,n,e,i){return e*((t=t/i-1)*t*t+1)+n},InOutCubic:function(t,n,e,i){return(t/=i/2)<1?e/2*t*t*t+n:e/2*((t-=2)*t*t+2)+n},InQuart:function(t,n,e,i){return e*(t/=i)*t*t*t+n},OutQuart:function(t,n,e,i){return-e*((t=t/i-1)*t*t*t-1)+n},InOutQuart:function(t,n,e,i){return(t/=i/2)<1?e/2*t*t*t*t+n:-e/2*((t-=2)*t*t*t-2)+n},InQuint:function(t,n,e,i){return e*(t/=i)*t*t*t*t+n},OutQuint:function(t,n,e,i){return e*((t=t/i-1)*t*t*t*t+1)+n},InOutQuint:function(t,n,e,i){return(t/=i/2)<1?e/2*t*t*t*t*t+n:e/2*((t-=2)*t*t*t*t+2)+n},InSine:function(t,n,e,i){return-e*Math.cos(t/i*(Math.PI/2))+e+n},OutSine:function(t,n,e,i){return e*Math.sin(t/i*(Math.PI/2))+n},InOutSine:function(t,n,e,i){return-e/2*(Math.cos(Math.PI*t/i)-1)+n},InExpo:function(t,n,e,i){return 0==t?n:e*Math.pow(2,10*(t/i-1))+n},OutExpo:function(t,n,e,i){return t==i?n+e:e*(1-Math.pow(2,-10*t/i))+n},InOutExpo:function(t,n,e,i){return 0==t?n:t==i?n+e:(t/=i/2)<1?e/2*Math.pow(2,10*(t-1))+n:e/2*(2-Math.pow(2,-10*--t))+n},InCirc:function(t,n,e,i){return-e*(Math.sqrt(1-(t/=i)*t)-1)+n},OutCirc:function(t,n,e,i){return e*Math.sqrt(1-(t=t/i-1)*t)+n},InOutCirc:function(t,n,e,i){return(t/=i/2)<1?-e/2*(Math.sqrt(1-t*t)-1)+n:e/2*(Math.sqrt(1-(t-=2)*t)+1)+n},InElastic:function(t,n,e,i){var r=1.70158,a=0,o=e;if(0==t)return n;if(1==(t/=i))return n+e;if(a||(a=.3*i),o<Math.abs(e)){o=e;r=a/4}else r=a/(2*Math.PI)*Math.asin(e/o);return-o*Math.pow(2,10*(t-=1))*Math.sin((t*i-r)*(2*Math.PI)/a)+n},OutElastic:function(t,n,e,i){var r=1.70158,a=0,o=e;if(0==t)return n;if(1==(t/=i))return n+e;if(a||(a=.3*i),o<Math.abs(e)){o=e;r=a/4}else r=a/(2*Math.PI)*Math.asin(e/o);return o*Math.pow(2,-10*t)*Math.sin((t*i-r)*(2*Math.PI)/a)+e+n},InOutElastic:function(t,n,e,i){var r=1.70158,a=0,o=e;if(0==t)return n;if(2==(t/=i/2))return n+e;if(a||(a=i*(.3*1.5)),o<Math.abs(e)){o=e;r=a/4}else r=a/(2*Math.PI)*Math.asin(e/o);return t<1?o*Math.pow(2,10*(t-=1))*Math.sin((t*i-r)*(2*Math.PI)/a)*-.5+n:o*Math.pow(2,-10*(t-=1))*Math.sin((t*i-r)*(2*Math.PI)/a)*.5+e+n},InBack:function(t,n,e,i,r){return null==r&&(r=1.70158),e*(t/=i)*t*((r+1)*t-r)+n},OutBack:function(t,n,e,i,r){return null==r&&(r=1.70158),e*((t=t/i-1)*t*((r+1)*t+r)+1)+n},InOutBack:function(t,n,e,i,r){return null==r&&(r=1.70158),(t/=i/2)<1?e/2*(t*t*((1+(r*=1.525))*t-r))+n:e/2*((t-=2)*t*((1+(r*=1.525))*t+r)+2)+n},InBounce:function(t,n,e,i){return e-this.OutBounce(i-t,0,e,i)+n},OutBounce:function(t,n,e,i){return(t/=i)<1/2.75?e*(7.5625*t*t)+n:t<2/2.75?e*(7.5625*(t-=1.5/2.75)*t+.75)+n:t<2.5/2.75?e*(7.5625*(t-=2.25/2.75)*t+.9375)+n:e*(7.5625*(t-=2.625/2.75)*t+.984375)+n},InOutBounce:function(t,n,e,i){return t<i/2?.5*this.InBounce(2*t,0,e,i)+n:.5*this.OutBounce(2*t-i,0,e,i)+.5*e+n}}}.Run(t)};
window.OnlineWebFonts_Com=window.OnlineWebFonts_Com||function(t){return new OnlineWebFonts_Animations(t);};if(typeof Object.assign != 'function'){Object.assign = function(e){e = Object(e);for(var i=1;i<arguments.length;i++){var s=arguments[i];if(s != null){for(var k in s){if(Object.prototype.hasOwnProperty.call(s,k)){e[k] = s[k];}}}}return e;}}
window.__Animations = Object.assign(window.__Animations || {},{"541051":{"Line":[{"Path":"M117.4,10.1c-12.1,1.9-23.3,6.6-33.3,13.9C80.4,26.8,69.1,38,69.1,38.9c0,0.3-2.1,0.4-4.9,0.2c-5.8-0.4-12.5,0.5-18.7,2.4c-16.3,5.1-28.8,18-33.9,34.9c-1.4,4.6-1.6,5.7-1.6,14.2c0,10.8,0.9,14.9,4.9,23.1c11.1,22.4,37,33.8,60.7,26.8l4-1.2l2.1,1.7c9,7.2,20.4,12.5,31.9,15c6.4,1.4,22.2,1.4,28.6,0c10.4-2.2,20.2-6.6,29-12.9l5.2-3.7l4,1.2c23.6,6.9,49.6-4.6,60.6-26.9c4-8.1,4.9-12.3,4.9-22.8c0.1-9.9-0.8-13.9-4.3-21.7c-8.8-19-28.8-31.2-49.3-30.1l-5.3,0.3l-1.3-1.8c-1.9-2.9-10.5-11.1-14.7-14.2c-7.8-5.7-16.2-9.6-26.1-12c-4.6-1.2-7.3-1.4-15.1-1.6C124.8,9.7,119.1,9.8,117.4,10.1z M134.7,24.6c9.4,1.2,17.6,4.1,25.2,9.1c6.2,4.1,10.9,8.6,16.2,15.7l4.4,5.9l2.8-0.3c8.3-1,15.9-1.1,19.8-0.1c13.2,3.2,23.9,13.7,27.5,26.9c1.2,4.8,1.2,13.5-0.1,18.3c-4.2,15.7-17.9,26.7-34.2,27.6c-6.1,0.3-9.8-0.4-17.8-3.4l-5.2-1.9l-2.4,2.1c-15.7,13.4-26.6,18-42.7,18.1c-15.2,0.1-27.7-4.7-40-15.3c-2.1-1.8-4.3-3.7-4.8-4.1c-0.7-0.6-1.8-0.4-6.7,1.4c-7.2,2.7-12.2,3.6-17.9,3.2c-12.8-0.9-24.4-8.4-30.3-19.8c-3.1-5.9-4.1-10.3-4.2-17c0-10.6,3.2-18.3,10.8-25.9c5-5.1,7.7-6.8,14.1-9.2c3.5-1.3,4.7-1.5,11.2-1.5c4-0.1,9,0.2,11.1,0.4l3.9,0.5l4.4-5.9c2.4-3.3,6-7.4,7.9-9.2C100.4,28.3,117.8,22.5,134.7,24.6z","Duration":0,"Width":"3","Color":"#000000"},{"Path":"M50.6,157.9c-4.3,1-7.8,3.8-10,7.9c-1.7,3.2-1.7,9.7,0,12.8c1.6,3,5.6,6.6,8.3,7.6c6.6,2.2,14.3-0.6,17.8-6.5c1.7-2.9,2.3-8.2,1.4-11.7C66.2,161.2,57.7,156.2,50.6,157.9z","Duration":0,"Width":"3","Color":"#000000"},{"Path":"M198.4,158.1c-6.2,1.7-10.3,6.6-10.8,12.7c-0.6,6.7,2.1,11.7,7.8,14.6c5.7,2.9,12.2,2,16.7-2.3c3.4-3.3,4.6-5.8,4.6-10.7s-1.1-7.3-4.6-10.7C208.4,158.1,203.2,156.8,198.4,158.1z","Duration":0,"Width":"3","Color":"#000000"},{"Path":"M124.1,172.8c-10.4,3.4-14.1,15.1-7.4,23.8c3.1,4.1,10,6.2,15.6,4.7c7.6-2.1,12.3-11.4,9.7-19.2c-0.9-2.7-4.6-6.7-7.5-8.2C132,172.7,126.4,172.1,124.1,172.8z","Duration":0,"Width":"3","Color":"#000000"},{"Path":"M79.7,217.3c-10.4,3.4-14.1,15.1-7.4,23.8c3.1,4.1,10,6.2,15.6,4.7c7.6-2.1,12.3-11.4,9.7-19.2c-0.9-2.7-4.6-6.7-7.5-8.2C87.6,217.1,81.9,216.5,79.7,217.3z","Duration":0,"Width":"3","Color":"#000000"},{"Path":"M168.6,217.3c-10.4,3.4-14.1,15.1-7.4,23.8c3.1,4.1,10,6.2,15.6,4.7c7.6-2.1,12.3-11.4,9.7-19.2c-0.9-2.7-4.6-6.7-7.5-8.2C176.4,217.1,170.8,216.5,168.6,217.3z","Duration":0,"Width":"3","Color":"#000000"}],"Box":{"Width":"256","Height":"256"},"Config":{"Width":"3","Opacity":1,"Sequential":true,"Color":"#000000","Animate":"Linear","Reverse":false}}});