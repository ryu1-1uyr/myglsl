precision mediump float;
uniform float time;
uniform vec2 resolution;
uniform sampler2D backbuffer;
uniform vec2 mouse;
void main() {
	vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);
	vec3 cam = vec3(time, sin(time/2.0), -16.5);
	vec3 cur = cam;
	vec3 ray = normalize(vec3(p, 2));


	for(int i=0; i<16; i++){
		float dist = (1.0+cos(cur.x/cur.y + pow(cur.z, 2.) ))/(abs(ray.x)+abs(ray.y)+abs(ray.z));
		if (dist < 0.) break;
		cur += ray * dist;
	}
	gl_FragColor = vec4(vec3(length(cur - cam) / 32.0), 1);
}
