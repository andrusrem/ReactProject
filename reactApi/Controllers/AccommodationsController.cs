using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using reactApi.Models;

namespace reactApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccommodationsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AccommodationsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Accommodations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Accommodation>>> GetAccommodations()
        {
            return await _context.Accommodations.ToListAsync();
        }

        // GET: api/Accommodations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Accommodation>> GetAccommodation(int id)
        {
            var accommodation = await _context.Accommodations.FindAsync(id);

            if (accommodation == null)
            {
                return NotFound();
            }

            return accommodation;
        }

        // PUT: api/Accommodations/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAccommodation(int id, Accommodation accommodation)
        {
            if (id != accommodation.Id)
            {
                return BadRequest();
            }

            _context.Entry(accommodation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccommodationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Accommodations
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Accommodation>> PostAccommodation(Accommodation accommodation)
        {
            _context.Accommodations.Add(accommodation);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAccommodation", new { id = accommodation.Id }, accommodation);
        }

        // DELETE: api/Accommodations/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAccommodation(int id)
        {
            var accommodation = await _context.Accommodations.FindAsync(id);
            if (accommodation == null)
            {
                return NotFound();
            }

            _context.Accommodations.Remove(accommodation);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AccommodationExists(int id)
        {
            return _context.Accommodations.Any(e => e.Id == id);
        }
    }
}
