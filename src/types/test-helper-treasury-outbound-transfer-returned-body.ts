import {
  External$TestHelperTreasuryOutboundTransferReturnedBodyReturnedDetails,
  Schemas$TestHelperTreasuryOutboundTransferReturnedBodyReturnedDetails,
  TestHelperTreasuryOutboundTransferReturnedBodyReturnedDetails,
} from "./test-helper-treasury-outbound-transfer-returned-body-returned-details";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperTreasuryOutboundTransferReturnedBody
 */
export type TestHelperTreasuryOutboundTransferReturnedBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Details about a returned OutboundTransfer.
   */
  returnedDetails?:
    | TestHelperTreasuryOutboundTransferReturnedBodyReturnedDetails
    | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | (
        | TestHelperTreasuryOutboundTransferReturnedBodyReturnedDetails
        | undefined
      )
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TestHelperTreasuryOutboundTransferReturnedBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperTreasuryOutboundTransferReturnedBody = {
  expand?: string[] | undefined;
  returned_details?:
    | External$TestHelperTreasuryOutboundTransferReturnedBodyReturnedDetails
    | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | (
        | External$TestHelperTreasuryOutboundTransferReturnedBodyReturnedDetails
        | undefined
      )
    | External$TestHelperTreasuryOutboundTransferReturnedBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperTreasuryOutboundTransferReturnedBody
 */
const SchemaIn$TestHelperTreasuryOutboundTransferReturnedBody: z.ZodType<
  TestHelperTreasuryOutboundTransferReturnedBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    returned_details:
      Schemas$TestHelperTreasuryOutboundTransferReturnedBodyReturnedDetails.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      returned_details: "returnedDetails",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperTreasuryOutboundTransferReturnedBody
 */
const SchemaOut$TestHelperTreasuryOutboundTransferReturnedBody: z.ZodType<
  External$TestHelperTreasuryOutboundTransferReturnedBody, // output type of this zod object
  z.ZodTypeDef,
  TestHelperTreasuryOutboundTransferReturnedBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    returnedDetails:
      Schemas$TestHelperTreasuryOutboundTransferReturnedBodyReturnedDetails.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      returnedDetails: "returned_details",
    });
  });

export const Schemas$TestHelperTreasuryOutboundTransferReturnedBody = {
  in: SchemaIn$TestHelperTreasuryOutboundTransferReturnedBody,
  out: SchemaOut$TestHelperTreasuryOutboundTransferReturnedBody,
};
