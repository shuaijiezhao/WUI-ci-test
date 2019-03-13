let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
    importAll(require.context('./Icons/', true, /\.svg$/))
} catch (error) {
    console.log(error)
}