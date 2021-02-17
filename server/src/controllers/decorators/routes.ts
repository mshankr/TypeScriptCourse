import "reflect-metadata";

export function get(path: string) {
  // target = Class prototype
  return function (target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata("path", path, target, key);
  };
}
