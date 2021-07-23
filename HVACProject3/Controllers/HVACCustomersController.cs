using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HVACProject3.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Authorization;

namespace HVACProject3.Controllers
{
    [Route("api/HVACCustomers")]
    [EnableCors("HVACEquipmentPolicy")]
    [ApiController]
    [Authorize]
    public class HVACCustomersController : ControllerBase
    {
        private readonly HVACCompanyContext _context;

        public HVACCustomersController(HVACCompanyContext context)
        {
            _context = context;
        }

        // GET: api/HVACCustomers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HVACCustomer>>> GetHVACCustomers()
        {
            return await _context.HVACCustomers.ToListAsync();
        }

        // GET: api/HVACCustomers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<HVACCustomer>> GetHVACCustomer(int id)
        {
            var hVACCustomer = await _context.HVACCustomers.FindAsync(id);

            if (hVACCustomer == null)
            {
                return NotFound();
            }

            return hVACCustomer;
        }

        // PUT: api/HVACCustomers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHVACCustomer(int id, HVACCustomer hVACCustomer)
        {
            if (id != hVACCustomer.CustomerId)
            {
                return BadRequest();
            }

            _context.Entry(hVACCustomer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HVACCustomerExists(id))
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

        // POST: api/HVACCustomers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<HVACCustomer>> PostHVACCustomer(HVACCustomer hVACCustomer)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _context.HVACCustomers.Add(hVACCustomer);
            await _context.SaveChangesAsync();
            var dto = new HVACCustomer()
            {
               CustomerId = hVACCustomer.CustomerId,
               CompanyName = hVACCustomer.CompanyName,
               ContactName = hVACCustomer.ContactName,
               Email = hVACCustomer.Email,
               PhoneNumber = hVACCustomer.PhoneNumber,
               Address = hVACCustomer.Address
    };
            return CreatedAtAction(nameof(GetHVACCustomer), new
            {
                id = hVACCustomer.CustomerId
            }, dto);
        }

        // DELETE: api/HVACCustomers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHVACCustomer(int id)
        {
            var hVACCustomer = await _context.HVACCustomers.FindAsync(id);
            if (hVACCustomer == null)
            {
                return NotFound();
            }

            _context.HVACCustomers.Remove(hVACCustomer);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool HVACCustomerExists(int id)
        {
            return _context.HVACCustomers.Any(e => e.CustomerId == id);
        }
    }
}
