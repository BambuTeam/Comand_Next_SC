// this one line applies next-aout to everything
export { default } from 'next-auth/middleware';
// this next-auth only to mach some route
// olso can be a regex @oscar @quique
export const config = { matcher: ['/home'] };
