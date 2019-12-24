import React from 'react';

const CsgoSettings = () => {
  return (
    <div>
      <h1>
        CS: GO
      </h1>
      <h2>
        CS: GO settings
      </h2>

      <h3>
        Sensitivity
      </h3>
      <p>
        Ingame: 2.4<br />
        DPI: 400
      </p>

      <h3>
        Resolution
      </h3>
      <p>
        1440x1080<br />
        4:3 stretched
      </p>
      <h3>
        Crosshair
      </h3>
      <p>
        <pre>
          <code>cl_crosshair_drawoutline "0"; cl_crosshair_dynamic_maxdist_splitratio "0.35"; cl_crosshair_dynamic_splitalpha_innermod "1"; cl_crosshair_dynamic_splitalpha_outermod "0.5"; cl_crosshair_dynamic_splitdist "7"; cl_crosshair_friendly_warning "1"; cl_crosshair_outlinethickness "1"; cl_crosshair_sniper_show_normal_inaccuracy "0"; cl_crosshair_sniper_width "1"; cl_crosshair_t "0"; cl_crosshairalpha "800"; cl_crosshaircolor "1"; cl_crosshaircolor_b "255"; cl_crosshaircolor_g "0"; cl_crosshaircolor_r "255"; cl_crosshairdot "0"; cl_crosshairgap "-2"; cl_crosshairgap_useweaponvalue "0"; cl_crosshairscale "600"; cl_crosshairsize "3"; cl_crosshairstyle "4"; cl_crosshairthickness "1"; cl_crosshairusealpha "1"; cl_fixedcrosshairgap "1000"</code>
        </pre>
      </p>
    </div>
  );
}

export default CsgoSettings;