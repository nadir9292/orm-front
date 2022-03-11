import classNames from "classnames"

const Input = (props) => {
  const { className, ...otherProps } = props

  return (
    <input
      {...otherProps}
      className={classNames(
        "appearance-none rounded-none relative block w-full px-3 mt-1 mb-2" +
          " py-2 border border-gray-300 placeholder-gray-500 text-gray-900" +
          " rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" +
          " focus: z - 10 sm: text - sm",
        className
      )}
    />
  )
}

export default Input
