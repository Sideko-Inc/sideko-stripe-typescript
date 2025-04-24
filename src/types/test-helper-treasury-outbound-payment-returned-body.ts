import {
  External$TestHelperTreasuryOutboundPaymentReturnedBodyReturnedDetails,
  Schemas$TestHelperTreasuryOutboundPaymentReturnedBodyReturnedDetails,
  TestHelperTreasuryOutboundPaymentReturnedBodyReturnedDetails,
} from "./test-helper-treasury-outbound-payment-returned-body-returned-details";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperTreasuryOutboundPaymentReturnedBody
 */
export type TestHelperTreasuryOutboundPaymentReturnedBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Optional hash to set the return code.
   */
  returnedDetails?:
    | TestHelperTreasuryOutboundPaymentReturnedBodyReturnedDetails
    | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | (TestHelperTreasuryOutboundPaymentReturnedBodyReturnedDetails | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TestHelperTreasuryOutboundPaymentReturnedBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperTreasuryOutboundPaymentReturnedBody = {
  expand?: string[] | undefined;
  returned_details?:
    | External$TestHelperTreasuryOutboundPaymentReturnedBodyReturnedDetails
    | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | (
        | External$TestHelperTreasuryOutboundPaymentReturnedBodyReturnedDetails
        | undefined
      )
    | External$TestHelperTreasuryOutboundPaymentReturnedBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperTreasuryOutboundPaymentReturnedBody
 */
const SchemaIn$TestHelperTreasuryOutboundPaymentReturnedBody: z.ZodType<
  TestHelperTreasuryOutboundPaymentReturnedBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    returned_details:
      Schemas$TestHelperTreasuryOutboundPaymentReturnedBodyReturnedDetails.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperTreasuryOutboundPaymentReturnedBody
 */
const SchemaOut$TestHelperTreasuryOutboundPaymentReturnedBody: z.ZodType<
  External$TestHelperTreasuryOutboundPaymentReturnedBody, // output type of this zod object
  z.ZodTypeDef,
  TestHelperTreasuryOutboundPaymentReturnedBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    returnedDetails:
      Schemas$TestHelperTreasuryOutboundPaymentReturnedBodyReturnedDetails.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      returnedDetails: "returned_details",
    });
  });

export const Schemas$TestHelperTreasuryOutboundPaymentReturnedBody = {
  in: SchemaIn$TestHelperTreasuryOutboundPaymentReturnedBody,
  out: SchemaOut$TestHelperTreasuryOutboundPaymentReturnedBody,
};
