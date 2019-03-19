precision mediump float;
uniform float time;
uniform vec2 resolution;

void main() {
// 	vec2 uv = gl_FragCoord.xy / resolution.xy;
//
// 	float a = gl_FragCoord.x / 512.0;
//
// float r = abs(sin(time*2.0));
// float g = abs(cos(time));
//
// 	gl_FragColor = vec4(r*g,a,a,0.5);
//
// 	vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
//
// 	gl_FragColor = vec4(
// 		// 0.3 / length(p + vec2(sin(time * 0.5) * 0.4, 0)),
// 		0.2 / length(p + vec2(sin(time * 0.9) * 0.5, 0)),
// 		0.0,
// 		0.1 / length(p + vec2(cos(time * 0.5) * 0.9, 0)),
// 		1.
// 	);

vec2 p = (gl_FragCoord.xy * 2.0 -resolution) / min (resolution.x,resolution.y);
float l = 0.01 * length(tan(time) / p);

gl_FragColor = vec4(vec3(l,0.0,l),1.0);




}
