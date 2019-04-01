precision mediump float;
uniform float time;
uniform vec2 resolution;

void main() {

// vec2 p = (gl_FragCoord.xy * 2.0 -resolution) / min (resolution.x,resolution.y);
// float l = 0.01 * length(tan(time) / p);
//
// gl_FragColor = vec4(vec3(l,0.0,l),1.0);

vec2 p = (gl_FragCoord.xy * 2.0 -resolution) / min (resolution.x,resolution.y);
float l = 0.1 * length(tan(time/(p))/ p);

gl_FragColor = vec4(vec3(l,l,l),0.1);

}
