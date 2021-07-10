using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HVACProject3.Models;
using Microsoft.AspNetCore.Cors;

namespace HVACProject3.Controllers
{
    [Route("api/HVACEquipments")]
    [EnableCors("HVACEquipmentPolicy")]
    [ApiController]
    public class HVACEquipmentsController : ControllerBase
    {
        private readonly HVACCompanyContext _context;

        public HVACEquipmentsController(HVACCompanyContext context)
        {
            _context = context;
        }

        // GET: api/HVACEquipments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HVACEquipment>>> GetHVACEquipments()
        {
            return await _context.HVACEquipments.Include(b => b.Location).Select(b =>
                    new HVACEquipment()
                    {
                        EquipmentId = b.EquipmentId,
                        Name = b.Name,
                        LocationId = b.LocationId,
                        Location = b.Location
                    }).ToListAsync();
        }

        // GET: api/HVACEquipments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<HVACEquipment>> GetHVACEquipment(int id)
        {
            
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var hVACEquipment = await _context.HVACEquipments
                    .Include(i => i.Location)
                    .Select(b =>
                    new HVACEquipment()
                    {
                        EquipmentId = b.EquipmentId,
                        Name = b.Name,
                        LocationId = b.LocationId,
                        Location = b.Location
     
                    
                }).SingleOrDefaultAsync(b => b.EquipmentId == id);

                if (hVACEquipment == null)
                {
                    return NotFound();
                }

            return Ok(hVACEquipment);
        }

        // PUT: api/HVACEquipments/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHVACEquipment(int id, HVACEquipment hVACEquipment)
        {
            if (id != hVACEquipment.EquipmentId)
            {
                return BadRequest();
            }
            _context.Entry(hVACEquipment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HVACEquipmentExists(id))
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

        // POST: api/HVACEquipments
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<HVACEquipment>> PostHVACEquipment(HVACEquipment hVACEquipment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.HVACEquipments.Add(hVACEquipment);
            await _context.SaveChangesAsync();

            _context.Entry(hVACEquipment).Reference(x => x.Location).Load();

            var dto = new HVACEquipment()
            {
                EquipmentId = hVACEquipment.EquipmentId,
                Name = hVACEquipment.Name,
                LocationId = hVACEquipment.LocationId,
               // Location = hVACEquipment.Location,
                //HVACCustomerCustomerId = hVACEquipment.HVACCustomerCustomerId,
                //Customer = hVACEquipment.Customer
            };

            return CreatedAtAction(nameof(GetHVACEquipment), new { id = hVACEquipment.EquipmentId }, dto);
        }


        // DELETE: api/HVACEquipments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHVACEquipment(int id)
        {
            var hVACEquipment = await _context.HVACEquipments.FindAsync(id);
            if (hVACEquipment == null)
            {
                return NotFound();
            }

            _context.HVACEquipments.Remove(hVACEquipment);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool HVACEquipmentExists(int id)
        {
            return _context.HVACEquipments.Any(e => e.EquipmentId == id);
        }
    }
}
