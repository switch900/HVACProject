using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HVACProject3.Models;
using Microsoft.AspNetCore.Cors;

namespace HVACProject3.Controllers
{
    [Route("api/HVACEquipmentLocations")]
    [EnableCors("HVACEquipmentPolicy")]
    [ApiController]
    public class HVACEquipmentLocationsController : ControllerBase
    {
        private readonly HVACCompanyContext _context;

        public HVACEquipmentLocationsController(HVACCompanyContext context)
        {
            _context = context;
        }

        //// GET: api/HVACEquipmentLocations
        //[HttpGet]
        //public IQueryable<HVACEquipmentLocation> GGetHVACEquipmentLocations()
        //{
        //    return _context.HVACEquipmentLocations;
        //}

        // GET: api/HVACEquipmentLocations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HVACEquipmentLocation>>> GetHVACEquipmentLocations()
        {
            return await _context.HVACEquipmentLocations.ToListAsync();
        }
        // GET: api/HVACEquipmentLocations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<HVACEquipmentLocation>> GetHVACEquipmentLocation(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var hVACEquipmentLocation = await _context.HVACEquipmentLocations
                //.Include(i => i.HvacEquipment)               
                .FirstOrDefaultAsync(i => i.LocationId == id);


            if (hVACEquipmentLocation == null)
            {
                return NotFound();
            }

            return Ok(hVACEquipmentLocation);
        }
        //var hVACEquipmentLocation = await _context.HVACEquipmentLocations.FindAsync(id);

        //    if (hVACEquipmentLocation == null)
        //    {
        //        return NotFound();
        //    }

        //    return hVACEquipmentLocation;
        //}

        // PUT: api/HVACEquipmentLocations/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHVACEquipmentLocation(int id, HVACEquipmentLocation hVACEquipmentLocation)
        {
            if (id != hVACEquipmentLocation.LocationId)
            {
                return BadRequest();
            }

            _context.Entry(hVACEquipmentLocation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HVACEquipmentLocationExists(id))
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

        // POST: api/HVACEquipmentLocations
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<HVACEquipmentLocation>> PostHVACEquipmentLocation(HVACEquipmentLocation hVACEquipmentLocation)
        {
            _context.HVACEquipmentLocations.Add(hVACEquipmentLocation);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHVACEquipmentLocation", new { id = hVACEquipmentLocation.LocationId }, hVACEquipmentLocation);
        }

        // DELETE: api/HVACEquipmentLocations/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHVACEquipmentLocation(int id)
        {
            var hVACEquipmentLocation = await _context.HVACEquipmentLocations.FindAsync(id);
            if (hVACEquipmentLocation == null)
            {
                return NotFound();
            }

            _context.HVACEquipmentLocations.Remove(hVACEquipmentLocation);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool HVACEquipmentLocationExists(int id)
        {
            return _context.HVACEquipmentLocations.Any(e => e.LocationId == id);
        }

        // GET api/hvaclocations/3/hvacequipment
        [HttpGet("{id:int}/hvacequipment")]
        public async Task<IActionResult> GetHvacEquipment(int id)
        {
            var hVACEquipmentLocation = await _context.HVACEquipmentLocations
              .Include(m => m.HvacEquipment)
              .FirstOrDefaultAsync(i => i.LocationId == id);

            if (hVACEquipmentLocation == null)
                return NotFound();

            return Ok(hVACEquipmentLocation.HvacEquipment);
        }
    }
}
