function addEnvs(envs, force) {
  let setJsons = Object.entries(envs)
    .map(([key, value]) => {
      return force ? {[key]: value} :
        !process.env[key] ?
          {[key]: value} : null;
    })
    .filter(env => null !== env)
    .reduce((result, current) => ({...result, ...current}), {});
  process.env = Object.assign(process.env, setJsons);
  return setJsons;
}

module.exports = addEnvs;