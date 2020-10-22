import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SubmitBar from './SubmitBar'

it('renders correctly', () => {
  const mockFunc = jest.fn()
  const comp = render(<SubmitBar addTask={mockFunc} />)
  const btn = comp.getByText('Submit')
  expect(btn).toBeDefined()
})

describe('Input value', () => {
  it('updates on change', () => {
    const mockFunc = jest.fn()
    const comp = render(<SubmitBar addTask={mockFunc} />)
    const formInput = comp.container.querySelector('input')
    fireEvent.change(formInput, { target: { value: 'test' } })
    expect(formInput.value).toBe('test')
  })
})

it('form submits', () => {
  const mockFunc = jest.fn()
  const wrapper = render(<SubmitBar addTask={mockFunc} />)
  const formInput = wrapper.container.querySelector('input')
  fireEvent.change(formInput, { target: { value: 'test' } })
  const form = wrapper.container.querySelector('form')
  fireEvent.submit(form)
  expect(mockFunc).toHaveBeenCalled()
})
