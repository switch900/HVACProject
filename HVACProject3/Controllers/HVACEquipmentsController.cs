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
            return await _context.HVACEquipments.ToListAsync();
        }

        // GET: api/HVACEquipments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<HVACEquipment>> GetHVACEquipment(long id)
        {
            var hVACEquipment = await _context.HVACEquipments.FindAsync(id);

            if (hVACEquipment == null)
            {
                return NotFound();
            }

            return hVACEquipment;
        }

        // PUT: api/HVACEquipments/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHVACEquipment(long id, HVACEquipment hVACEquipment)
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
            _context.HVACEquipments.Add(hVACEquipment);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetHVACEquipment), new { id = hVACEquipment.EquipmentId }, hVACEquipment);
        }


        // DELETE: api/HVACEquipments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHVACEquipment(long id)
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

        private bool HVACEquipmentExists(long id)
        {
            return _context.HVACEquipments.Any(e => e.EquipmentId == id);
        }
    }
}
