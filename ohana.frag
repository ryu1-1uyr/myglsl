precision mediump float;
uniform float time;
uniform vec2 resolution;

void main() {

// float th = atan(,)

vec2 p = (gl_FragCoord.xy * 2.0 -resolution) / min (resolution.x,resolution.y);
float th = atan(p.y,p.x) + time ;
float th1 = atan(p.y,p.x) - time ;


float l = 0.01 * length(tan(time) / p);

float f_1 =  pow(abs(sin(2.5 * th )), 0.5);
float f_2 =  pow(abs(sin(2.5 * th1 )), 0.5);


vec3 b = vec3((f_2 - length(p) + 0.01),f_2 - length(p),f_2 - length(p) ) * 0.4;

gl_FragColor = vec4(vec3((f_1 - length(p) + 0.3),f_1 - length(p) + 0.2,f_1 - length(p) + 0.2) +b,1.0);

}
