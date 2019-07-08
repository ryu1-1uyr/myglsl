precision mediump float;
uniform float time;
uniform vec2 resolution;

void main() {

  vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min (resolution.x,resolution.y);
  float l_x = 0.01 * length(sin(time) / p.x);
  float l_y = 0.01 * length(sin(time) / p.y);

  float x = (p.x * p.x );
  float y = (p.y * p.y );

  float th = atan(p.y,p.x);//+ time ;
  float f_1 =  pow(abs(sin(2.5 * th )), 0.9);

  float circle = x + y -0.2;
  float naka = sin( ( (x+y-9.0)) * (time * 0.1));

  gl_FragColor = vec4( vec3( tan( (naka / f_1 * 0.01) / sin(circle * (time*0.00001) ) )  ) , 0.5);

}
