using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HVACProject3.Models;
using Microsoft.AspNetCore.Cors;

namespace HVACProject3.Controllers
{
    [Route("api/SystemAdmins")]
    [EnableCors("HVACEquipmentPolicy")]
    [ApiController]
    public class SystemAdminsController : ControllerBase
    {
        private readonly HVACCompanyContext _context;

        public SystemAdminsController(HVACCompanyContext context)
        {
            _context = context;
        }

        // GET: api/SystemAdmins
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SystemAdmin>>> GetSystemAdmins()
        {
            return await _context.SystemAdmins.ToListAsync();
        }

        // GET: api/SystemAdmins/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SystemAdmin>> GetSystemAdmin(long id)
        {
            var systemAdmin = await _context.SystemAdmins.FindAsync(id);

            if (systemAdmin == null)
            {
                return NotFound();
            }

            return systemAdmin;
        }

        // PUT: api/SystemAdmins/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSystemAdmin(long id, SystemAdmin systemAdmin)
        {
            if (id != systemAdmin.EmployeeId)
            {
                return BadRequest();
            }

            _context.Entry(systemAdmin).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SystemAdminExists(id))
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

        // POST: api/SystemAdmins
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<SystemAdmin>> PostSystemAdmin(SystemAdmin systemAdmin)
        {
            _context.SystemAdmins.Add(systemAdmin);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSystemAdmin", new { id = systemAdmin.EmployeeId }, systemAdmin);
        }

        // DELETE: api/SystemAdmins/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSystemAdmin(long id)
        {
            var systemAdmin = await _context.SystemAdmins.FindAsync(id);
            if (systemAdmin == null)
            {
                return NotFound();
            }

            _context.SystemAdmins.Remove(systemAdmin);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SystemAdminExists(long id)
        {
            return _context.SystemAdmins.Any(e => e.EmployeeId == id);
        }
    }
}
