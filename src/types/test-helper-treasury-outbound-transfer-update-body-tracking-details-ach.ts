import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsAch
 */
export type TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsAch = {
  traceId: string;
};

/**
 * @internal
 * TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsAch without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsAch =
  {
    trace_id: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsAch
 */
const SchemaIn$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsAch: z.ZodType<
  TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsAch, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsAch
 */
const SchemaOut$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsAch: z.ZodType<
  External$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsAch, // output type of this zod object
  z.ZodTypeDef,
  TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsAch // the object to be transformed
> = z
  .object({
    traceId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      traceId: "trace_id",
    });
  });

export const Schemas$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsAch =
  {
    in: SchemaIn$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsAch,
    out: SchemaOut$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsAch,
  };
