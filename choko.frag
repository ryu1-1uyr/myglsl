precision mediump float;
uniform float time;
uniform vec2 resolution;

void main() {

vec2 p = (gl_FragCoord.xy * 2.0 -resolution) / min (resolution.x,resolution.y) * 10.0 ;

float x = p.x - cos(time) ;//abs(sin(p.x * (time  * 5.0) ))
float y = p.y + sin(time) ;
float th = atan(p.y,p.x);

float z = min( min( min(9.0-10.0*cos(x) , 9.0-10.0*cos(1.5*y)) , 1.0),4.0 * max(max(cos(x),cos(1.5*y)),0.0));

gl_FragColor = vec4(vec3(z),1.0);

}
