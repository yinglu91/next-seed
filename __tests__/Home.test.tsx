import { render, screen } from '@testing-library/react'
import Home from '@/app/page'
import { describe } from 'node:test'

// group test cases using describe
describe('Home', () => {
  // Trible AAA
  it('should contain the text "information"', () => {
    render(<Home />) // Arrange

    const myEl = screen.getByText(/information/i) // Act

    expect(myEl).toBeInTheDocument() // Assert
  })

  it('should have a heading (h2) "Learn Nextjs"', () => {
    render(<Home />) // Arrange

    const myEl = screen.getByRole('heading', { name: 'Learn Nextjs' }) // Act

    expect(myEl).toBeInTheDocument() // Assert
  })
})
