import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { TrashIcon, PhotographIcon } from '@heroicons/react/outline'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { ClipboardIcon, ClipboardCheckIcon } from '@heroicons/react/outline'
import { title } from 'process'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NewTable({
  result,
  setResult,
  loading,
  upcTitle,
  setUpcTitle,
  titleTitle,
  setTitleTitle,
  sizeTitle,
  setSizeTitle,
  colorwayTitle,
  setColorwayTitle,
  scanning,
  copyToClip,
  copy,
  setCopy,
  brandTitle,
  setBrandTitle,
  dateTitle,
  setDateTitle,
  styleIDTitle,
  setStyleIDTitle,
  slugTitle,
  setSlugTitle,
  imageTitle,
  setImageTitle,
}) {
  const checkbox = useRef()
  const [checked, setChecked] = useState(false)
  const [indeterminate, setIndeterminate] = useState(false)
  const [selectedPeople, setSelectedPeople] = useState([])
  const [selectedByIdx, setSelectedByIdx] = useState([])
  const [copyButtonText, setCopyButtonText] = useState('Copy Selected')

  useEffect(() => {
    async function sleep() {
      setTimeout(() => {
        setCopyButtonText('Copy Selected')
      }, 2000)
    }
    if (copyButtonText != 'Copy Selected') {
      sleep()
    }
  }, [copyButtonText])

  function filterArrByIndexes(indexToRemove, allValuesFull) {
    return allValuesFull.filter((item, idx) => !indexToRemove.includes(idx))
  }

  function removeFromState(index) {
    var array = result // make a separate copy of the array
    if (index !== -1) {
      array.splice(index, 1)
      setResult((oldArray) => [...oldArray, array])
    }
  }

  function isEntriesDeleted(result) {
    let status = true
    result?.forEach((r) => {
      if (r?.title) {
        status = false
      }
    })
    return status
  }

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedPeople.length > 0 && selectedPeople.length < result.length
    setChecked(selectedPeople.length === result.length)
    setIndeterminate(isIndeterminate)
    checkbox.current.indeterminate = isIndeterminate
  }, [selectedPeople])

  function toggleAll() {
    setSelectedPeople(checked || indeterminate ? [] : result)
    setSelectedByIdx(checked || indeterminate ? [] : result)
    setChecked(!checked && !indeterminate)
    setIndeterminate(false)
    if (selectedByIdx == 0) {
      setSelectedByIdx([...Array(result?.length).keys()]) //if 5 results, then creates [0,1,2,3,4]
    }
  }

  return (
    <div className="mt-0 flex flex-col overflow-hidden">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8 ">
          <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg ">
            {selectedPeople?.length > 0 && (
              <div className="absolute top-0 left-12 flex h-12 items-center space-x-3  sm:left-16">
                {
                  <CopyToClipboard
                    options={{ format: 'text/plain' }}
                    text={result?.length > 0 ? copyToClip(selectedPeople) : ' '}
                  >
                    <button
                      onClick={() => {
                        console.log("The number of result is " + result?.length)
                        console.log("The number of selectedPeople is " + selectedPeople?.length)
                        setCopyButtonText('Copied!')
                        setCopy(!copy)
                      }}
                      type="button"
                      className={`${
                        isEntriesDeleted(result) ? 'mt-0' : 'mt-6'
                      }  inline-flex items-center rounded border border-white border-opacity-50 bg-black px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-black focus:outline-none  focus:ring-white focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30`}
                    >
                      {copyButtonText}
                    </button>
                  </CopyToClipboard>
                }

                <button
                  onClick={() => {
                    setResult(filterArrByIndexes(selectedByIdx, result))
                    toggleAll()
                  }}
                  type="button"
                  className={`${isEntriesDeleted(result) ? 'mt-0' : 'mt-6'}
                     inline-flex items-center rounded border border-white border-opacity-50 bg-black px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30`}
                >
                  Delete Selected
                </button>
              </div>
            )}
            <table className="min-w-full table-fixed divide-y divide-gray-300 ">
              <thead className="">
                <tr>
                  <th
                    scope="col"
                    className=" relative w-12 px-6 sm:w-16 sm:px-8"
                  >
                    <input
                      type="checkbox"
                      className="absolute left-4 top-1/2 ml-2 -mt-2 h-4 w-4 rounded border-black text-black sm:left-6"
                      ref={checkbox}
                      checked={checked}
                      onChange={toggleAll}
                    />
                  </th>
                  <th
                    onClick={() => setTitleTitle(!titleTitle)}
                    scope="col"
                    className={`min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-white hover:cursor-pointer`}
                  >
                    Title
                  </th>
                  <th
                    onClick={() => setSizeTitle(!sizeTitle)}
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                  >
                    Size
                  </th>
                  <th
                    onClick={() => setColorwayTitle(!colorwayTitle)}
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                  >
                    Color
                  </th>
                  <th
                    onClick={() => setBrandTitle(!brandTitle)}
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                  >
                    Brand
                  </th>
                  <th
                    onClick={() => setUpcTitle(!upcTitle)}
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                  >
                    UPC
                  </th>
                  <th
                    onClick={() => setDateTitle(!dateTitle)}
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-white "
                  >
                    Release Date
                  </th>
                  <th
                    onClick={() => setStyleIDTitle(!styleIDTitle)}
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-white "
                  >
                    Style ID
                  </th>
                  <th
                    onClick={() => setSlugTitle(!slugTitle)}
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                  >
                    GOAT
                  </th>
                  <th
                    onClick={() => setImageTitle(!imageTitle)}
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                  >
                    Image URL
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                <tr hidden={!loading} key={123456789} className={''}>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {
                      <svg
                        className="mr-0 ml-1.5 h-4 w-4 animate-spin text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    }
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {''}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {''}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {''}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {''}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {''}
                  </td>
                </tr>

                {result
                  ?.map((person, idx) => (
                    <tr
                      hidden={!person?.title}
                      key={idx}
                      className={
                        selectedPeople.includes(person) ? 'bg-black' : undefined
                      }
                    >
                      <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                        {selectedPeople.includes(person) && (
                          <div className="absolute inset-y-0 left-0 w-0.5 bg-black" />
                        )}
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 ml-2 -mt-2 h-4 w-4 rounded border-black text-black  sm:left-6"
                          value={person.email}
                          checked={selectedPeople.includes(person)}
                          onChange={(e) => {
                            setSelectedPeople(
                              e.target.checked
                                ? [...selectedPeople, person]
                                : selectedPeople.filter((p) => p !== person)
                            )
                            setSelectedByIdx(
                              e.target.checked
                                ? [...selectedByIdx, idx]
                                : selectedByIdx.filter((i) => i !== idx)
                            )
                          }}
                        />
                      </td>

                      <td
                        className={classNames(
                          'mr-10 flex  whitespace-nowrap py-4 pr-3 text-sm font-medium',
                          selectedPeople.includes(person)
                            ? 'text-white'
                            : 'text-white',
                          `${titleTitle ? ' ' : 'opacity-0 '}`
                        )}
                      >
                        {person.image == 'N/A' ? (
                          <PhotographIcon className="mr-1 ml-1 h-8  w-8  rounded-full pr-1 text-white opacity-80" />
                        ) : (
                          <img
                            className="h-10 w-10 rounded-full"
                            src={person.image}
                            alt=""
                          />
                        )}

                        <span className="pt-[9px] pl-3">{person.title}</span>
                      </td>
                      <td
                        className={`${
                          sizeTitle ? ' ' : 'opacity-0 '
                        } whitespace-nowrap px-3 py-4 text-sm text-white `}
                      >
                        {person.size}
                      </td>
                      <td
                        className={`${
                          colorwayTitle ? ' ' : 'opacity-0 '
                        } whitespace-nowrap px-3 py-4 text-sm text-white`}
                      >
                        {person.color2}
                      </td>
                      <td
                        className={`${
                          brandTitle ? ' ' : 'opacity-0 '
                        } whitespace-nowrap px-3 py-4 text-sm text-white`}
                      >
                        {person.brand}
                      </td>
                      <td
                        className={`${
                          upcTitle ? ' ' : 'opacity-0 '
                        } whitespace-nowrap px-3 py-4 text-sm text-white`}
                      >
                        {person.upc}
                      </td>
                      <td
                        className={`${
                          dateTitle ? ' ' : 'opacity-0 '
                        } whitespace-nowrap px-3 py-4 text-sm text-white`}
                      >
                        {person?.date
                          ? new Date(person.date).toISOString().split('T')[0]
                          : ''}
                      </td>
                      <td
                        className={`${
                          styleIDTitle ? ' ' : 'opacity-0 '
                        } whitespace-nowrap px-3 py-4 text-sm uppercase text-white`}
                      >
                        {person.styleID}
                      </td>
                      <td
                        className={`${
                          slugTitle ? ' ' : 'opacity-0 '
                        } whitespace-nowrap px-3 py-4 text-sm text-white`}
                      >
                        {person.slug}
                      </td>
                      <td
                        className={`${
                          imageTitle ? ' ' : 'opacity-0 '
                        } whitespace-nowrap px-3 py-4 text-sm text-white`}
                      >
                        {person.image}
                      </td>

                      <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a
                          onClick={() => {
                            removeFromState(idx)
                          }}
                          href="#"
                          className="text-white hover:text-white"
                        >
                          Delete<span className="sr-only">, {person.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))
                  .reverse()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
