precision mediump float;
uniform float time;
uniform vec2 resolution;

void main() {

  vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min (resolution.x,resolution.y);
  float l_x = 0.01 * length(sin(time) / p.x);
  float l_y = 0.01 * length(sin(time) / p.y);

  float x = (p.x * p.x + p.y * p.y ) * abs( sin(time) - 10. );

  gl_FragColor = vec4( vec3( x * (l_x*x + l_y*x) *sin(time - (x / 10.)) )  , 0.5);

}
