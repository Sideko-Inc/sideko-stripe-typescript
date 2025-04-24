import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsAch
 */
export type TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsAch = {
  traceId: string;
};

/**
 * @internal
 * TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsAch without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsAch =
  {
    trace_id: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsAch
 */
const SchemaIn$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsAch: z.ZodType<
  TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsAch, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    trace_id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      trace_id: "traceId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsAch
 */
const SchemaOut$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsAch: z.ZodType<
  External$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsAch, // output type of this zod object
  z.ZodTypeDef,
  TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsAch // the object to be transformed
> = z
  .object({
    traceId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      traceId: "trace_id",
    });
  });

export const Schemas$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsAch =
  {
    in: SchemaIn$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsAch,
    out: SchemaOut$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsAch,
  };
